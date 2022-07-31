import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';

@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CursosComponent,
    AlumnosComponent,
    AlumnoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
