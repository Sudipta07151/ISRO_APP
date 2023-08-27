import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpacecraftsComponent } from './spacecrafts/spacecrafts.component';
import { LaunchersComponent } from './launchers/launchers.component';
import { CustomerSatellitesComponent } from './customer-satellites/customer-satellites.component';
import { CentresComponent } from './centres/centres.component';
import { DataViewModule} from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpacecraftsComponent,
    LaunchersComponent,
    CustomerSatellitesComponent,
    CentresComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    DataViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
