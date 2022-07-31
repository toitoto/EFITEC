import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import Validation from '../../../helpers/validation';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted: boolean = false;
  loading: boolean = false;

  // register: FormGroup = new FormGroup({
  //   usuario: new FormControl('', [ Validators.required, Validators.pattern( /^-?(0|[1-9]\d*)?$/ ) ]),
  //   password: new FormControl('', [ Validators.required, Validators.minLength( 4 ) ])
  // });

  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService ) {
    // this.register = this.fb.group( {
    //   usuario: [ '', Validators.required ],
    //   password: [ '', [ Validators.required, Validators.minLength( 4 ) ] ],
    //   confirmPassword: [ '' ]
    // }, {
    //   validator: this.checkPassword
    // } )
  }

  ngOnInit(): void {
    this.register = this.fb.group(
      {
        usuario: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [ Validation.match('password', 'confirmPassword') ]
      }
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.register.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.register.invalid) {
      return;
    }

    console.log(JSON.stringify(this.register.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.register.reset();
  }



  get user() {
    return this.register.get('usuario')
  }


  registrar(): void{
    const usuario: Usuario = {
      nombre: this.register.value.usuario,
      password: this.register.value.password
    }
    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.toastr.success(`El usuario ${ usuario.nombre } fue registrado con éxito!`, 'Usuario registrado', {
          timeOut: 2000,
        });
        this.onReset();
        this.loading = false;
        this.router.navigate(['/inicio/login']);
      },
      error: (err: any) => {
        this.loading = false;
        this.onReset();
        this.toastr.error( err.error.message, 'Error', {
          timeOut: 2000,
        });
      },
      complete: () => console.log('Observer got a complete notification'),
    };

    this.usuarioService.saveUser(usuario).subscribe( myObserver );
  }

}
