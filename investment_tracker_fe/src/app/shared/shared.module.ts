import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { HttpStatusCodes } from './enums/HttpStatusCodes.enum';

@NgModule({
  imports: [
    CommonModule,
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
