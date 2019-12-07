import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './Routing/Student.Component';
import { StudentDetailsComponent } from './Routing/StudentDetails.Component';

///all rout path fixed here
const routes: Routes = [
  {path:'student', component: StudentComponent},
  {path:'studentDetails', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 export const routingComponents=[StudentComponent,StudentDetailsComponent]
