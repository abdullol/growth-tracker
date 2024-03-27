import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [
    PageHeaderComponent,
    LoaderComponent,
  ],
  exports: [
    PageHeaderComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
