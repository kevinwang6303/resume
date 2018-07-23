import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfResumeComponent } from './pdf-resume.component';

const routes: Routes = [
  {
    path: '',
    component: PdfResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfResumeRoutingModule {}
