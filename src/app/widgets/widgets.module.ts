import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardcardComponent } from './dashboardcard/dashboardcard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    DashboardcardComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
  ],
  exports:[
    DashboardcardComponent
  ]
})
export class WidgetsModule { }
