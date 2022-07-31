import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

const routes: Routes = [
  { path: '', component: AlumnosComponent },
  { path: 'cambiarPassword', component: CambiarPasswordComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
