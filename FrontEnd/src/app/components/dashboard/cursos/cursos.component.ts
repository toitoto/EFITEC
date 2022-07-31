import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  listCursos: Curso[] = [];

  constructor( private fb: FormBuilder,
    private cursoService: CursoService,
    private toastr: ToastrService,
    private router: Router ) {
      this.form = this.fb.group(
        {
          nombre: [
            '',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(50)
            ]
          ],
          descripcion: [
            '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(200)
            ]
          ],
          obligatoriedad: [
            false,
            [
              Validators.required,
            ]
          ]
        }
      );
    }

  ngOnInit(): void {
    this.listarCursos();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.form.reset();
  }

  guardarCurso(): void {
    console.log(this.form);

    const CURSO: any = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      obligatoriedad: this.form.value.obligatoriedad
    };

    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.toastr.info( data.message, 'Info', {
          timeOut: 2000,
        });
        this.onReset();
        this.loading = false;
        this.listarCursos();
        // this.router.navigate(['/dashboard']);
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

    this.cursoService.saveCurso( CURSO ).subscribe( myObserver );
  }

  listarCursos(): void {
    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.loading = false;
        this.listCursos = data.listaCursos;
      },
      error: (err: any) => {
        this.loading = false;
      },
      complete: () => console.log('Observer got a complete notification'),
    };

    this.cursoService.getCursos().subscribe( myObserver );
  }

  eliminarCurso( idCurso: number ): void {
    if ( confirm( 'Esta seguro que desea eliminar el curso?' ) ){
      this.loading = true;

      const myObserver = {
        next: ( data: any ) => {
          this.loading = false;
          this.toastr.success( data.message, 'Cuestionario eliminado' );
          this.listarCursos();
        },
        error: ( err: any ) => {
          this.loading = false;
          this.toastr.error( err.error.message, 'Error', {
            timeOut: 2000,
          });
        },
        complete: () => console.log('Observer got a complete notification'),
      };

      // this.cursoService.deleteCurso( idCurso ).subscribe( myObserver );
    }
  }

}
