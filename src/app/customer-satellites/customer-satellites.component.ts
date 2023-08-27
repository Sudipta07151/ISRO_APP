import { Component, OnInit } from '@angular/core';
import { IsroserverService } from '../isroserver.service';
@Component({
  selector: 'app-customer-satellites',
  templateUrl: './customer-satellites.component.html',
  styleUrls: ['./customer-satellites.component.css']
})
export class CustomerSatellitesComponent implements OnInit {
  customerSatelliteData=[];
  loader=false;
  constructor(
    private isroserverService:IsroserverService
  ) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(){
    this.loader=true;
    this.isroserverService.getData('customer_satellites').subscribe(
      (data)=>{
        console.log(data)
        this.mapData(data)
    },
    (err)=>{
      console.log(err)
    },
    ()=>{
      this.loader=false;
      console.log('RESOLVED')
    }
    )
  }
  mapData(data:any){
    console.log(data)
    this.customerSatelliteData=data.customer_satellites;
  }

}
