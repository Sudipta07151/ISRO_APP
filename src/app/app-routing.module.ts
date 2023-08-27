import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CentresComponent } from './centres/centres.component';
import { LaunchersComponent } from './launchers/launchers.component';
import { SpacecraftsComponent } from './spacecrafts/spacecrafts.component';
import { CustomerSatellitesComponent } from './customer-satellites/customer-satellites.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'isro/CentresComponent',component:CentresComponent},
  {path:'isro/LaunchersComponent',component:LaunchersComponent},
  {path:'isro/SpacecraftsComponent',component:SpacecraftsComponent},
  {path:'isro/CustomerSatellitesComponent',component:CustomerSatellitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
