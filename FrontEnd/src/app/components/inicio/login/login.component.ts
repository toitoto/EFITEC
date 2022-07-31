import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  formuario: FormGroup;

  constructor( private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService ) {
    this.formuario = this.fb.group( {
      usuario: [ '', Validators.required ],
      password: [ '', Validators.required ]
    } )
  }

  ngOnInit(): void {
  }

  onReset(): void {
    this.formuario.reset();
  }

  log(): void{

    const usuario: Usuario = {
      nombre: this.formuario.value.usuario,
      password: this.formuario.value.password
    }

    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.loginService.setLocalStorage( data.token );
        this.onReset();
        this.loading = false;
        this.router.navigate(['/dashboard']);
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

    this.loginService.login(usuario).subscribe( myObserver );
  }

}
