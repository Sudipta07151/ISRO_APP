import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  dashboardCardMenuItems=[
    {menutext:'Spacecrafts',logo:"https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",link:'isro/SpacecraftsComponent'},
    {menutext:'Launchers',logo:"https://plus.unsplash.com/premium_photo-1661875590899-2a00a0932c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",link:'isro/LaunchersComponent'},
    {menutext:'Customer Satellites',logo:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80",link:'isro/CustomerSatellitesComponent'},
    {menutext:'Centres',logo:"https://www.isro.gov.in/media_isro/image/ISRO_Centres/resized/mcc_shar_large.jpg.webp",link:'isro/CentresComponent'},
  ]
  ngOnInit(): void {
  }

}
