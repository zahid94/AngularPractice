import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './Routing/Student.Component';
import { StudentDetailsComponent } from './Routing/StudentDetails.Component';
import { PageNotFountComponent } from './NotFount/PageNotFount.component';
import { WorkerComponent } from './RoutParameter/Worker.component';
import { WorkDetailsComponent } from './RoutParameter/WorkDetails.component';

///all rout path fixed here
const routes: Routes = [
//this path is defaults diclaration oh home page
  {path:'' ,redirectTo:'/student' ,pathMatch:'full'},

  //all routing here
  {path:'student', component: StudentComponent},
  {path:'studentDetails', component: StudentDetailsComponent},
  {path:'worker',component: WorkerComponent},
  {path:'worker/:id',component: WorkDetailsComponent},
  
  // this path use for unexpected request
  {path:'**', component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 export const routingComponents= [
                                  StudentComponent,
                                  StudentDetailsComponent,
                                  PageNotFountComponent,
                                  WorkerComponent,
                                  WorkDetailsComponent
                                ]
