import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dashboardcard',
  templateUrl: './dashboardcard.component.html',
  styleUrls: ['./dashboardcard.component.css']
})
export class DashboardcardComponent implements OnInit {
  @Input() dashboardCardMenuItems:any;
  constructor() {
   }

  ngOnInit(): void {
  }

}
