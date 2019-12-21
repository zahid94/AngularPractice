import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { ComponentinterectionComponent } from './componentinterection/componentinterection.component';
import { PripesComponent } from './pripes/pripes.component';
import { ServicesComponent } from './services/services.component';
import {EmployeeService} from './dipattern/Employee.Service';
import{EmployeeListComponent} from './dipattern/Employee.Component';
import{EmployeeDetailsComponent} from './dipattern/EmployeeDetails.Component';
import{HttpClientModule} from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableService } from './observables/Observables.service';
import { StudentService } from './Routing/Student.Service';
import { WorkerService } from './RoutParameter/Worker.service';




//all component add here
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TwowaybindingComponent,
    StructuredirectiveComponent,
    ComponentinterectionComponent,
    PripesComponent,
    ServicesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ObservablesComponent,
    routingComponents 
    
    
  ],

  ///all import module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  // all service add here
  providers: [
    EmployeeService,
    ObservableService,
    StudentService,
    WorkerService
  ],

  //all master page add here
  bootstrap: [AppComponent]
})
export class AppModule { }
