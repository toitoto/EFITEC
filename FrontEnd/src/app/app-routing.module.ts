import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { CursosComponent } from './components/dashboard/cursos/cursos.component';
import { AuthGuard } from './helpers/auth.guard';
import { AlumnosComponent } from './components/dashboard/alumnos/alumnos.component';
import { AlumnoComponent } from './components/dashboard/alumnos/alumno/alumno.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children: [
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ], children: [
    { path: '', component: AlumnosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'alumno/:id', component: AlumnoComponent },
    { path: 'cambiarPassword', component: CambiarPasswordComponent }
  ] },
  { path: '**', redirectTo: '/bienvenidos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
