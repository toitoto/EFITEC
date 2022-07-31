import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/helpers/validation';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;

  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router ) {
    this.form = this.fb.group(
      {
        oldPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        newPassword: [
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
        validators: [ Validation.match('newPassword', 'confirmPassword') ]
      }
    );
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.form.reset();
  }

  guardarPassword(): void {
    console.log(this.form);

    const passwords: any = {
      oldPassword: this.form.value.oldPassword,
      newPassword: this.form.value.newPassword
    };

    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.toastr.info( data.message, 'Info', {
          timeOut: 2000,
        });
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

    this.usuarioService.changePassword( passwords ).subscribe( myObserver );
  }

}
