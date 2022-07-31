import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,
  exports: [
    LoadingComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
