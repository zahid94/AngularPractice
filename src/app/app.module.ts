import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { from } from 'rxjs';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { ComponentinterectionComponent } from './componentinterection/componentinterection.component';
import { PripesComponent } from './pripes/pripes.component';
import { ServicesComponent } from './services/services.component';
import {EmployeeService} from './dipattern/Employee.Service';
import{Employee} from './dipattern/Employee.Component';
import{EmployeeDetails} from './dipattern/EmployeeDetails.Component';
import{HttpClientModule} from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableService } from './observables/Observables.service';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TwowaybindingComponent,
    StructuredirectiveComponent,
    ComponentinterectionComponent,
    PripesComponent,
    ServicesComponent,
    Employee,
    EmployeeDetails,
    ObservablesComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
