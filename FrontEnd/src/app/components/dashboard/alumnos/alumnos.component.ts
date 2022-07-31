import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  loading: boolean = false;
  listAlumnos: Alumno[] = [];

  constructor( private alumnoService: AlumnoService,
    private toastr: ToastrService,
    private router: Router ) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }

  listarAlumnos(): void {
    this.loading = true;

    const myObserver = {
      next: (data: any) => {
        this.loading = false;
        this.listAlumnos = data.listaAlumnos;
      },
      error: (err: any) => {
        this.loading = false;
      },
      complete: () => console.log('Observer got a complete notification'),
    };

    this.alumnoService.getAlumnos().subscribe( myObserver );
  }
}
