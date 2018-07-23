import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfResumeRoutingModule } from './pdf-resume-routing.module';
import { PdfResumeComponent } from './pdf-resume.component';

@NgModule({
  imports: [
    CommonModule,
    PdfResumeRoutingModule
  ],
  declarations: [PdfResumeComponent]
})
export class PdfResumeModule { }
