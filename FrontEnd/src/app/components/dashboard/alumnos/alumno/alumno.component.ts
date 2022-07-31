import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;

  constructor( private fb: FormBuilder,
    private alumnoService: AlumnoService,
    private toastr: ToastrService,
    private router: Router ) {
     var currentDate = new Date();
    this.form = this.fb.group(
      {
        nombres: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)
          ]
        ],
        apellidos: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)
          ]
        ],
        fecha_de_nacimiento: [
          currentDate,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)
          ]
        ],
        sexo: [
          'M',
          [
            Validators.required
          ]
        ]
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

  guardarAlumno(): void {
    const ALUMNO: any = {
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      fecha_de_nacimiento: this.form.value.fecha_de_nacimiento,
      sexo: this.form.value.sexo,
      activo: '1'
    };
console.log(ALUMNO)
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

    this.alumnoService.saveAlumno( ALUMNO ).subscribe( myObserver );
  }

}
