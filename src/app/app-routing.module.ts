import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './pages/home/home.module#HomeModule'
  // },
  {
    path: '',
    loadChildren: './pages/pdf-resume/pdf-resume.module#PdfResumeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
