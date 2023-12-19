import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { TestPage2Component } from './pages/test-page2/test-page2.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page1', component: TestPageComponent},
  {path: 'page2', component: TestPage2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
