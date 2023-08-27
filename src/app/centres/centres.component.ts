import { Component, OnInit } from '@angular/core';
import { IsroserverService } from '../isroserver.service';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit {
  centresData=[];
  loader: boolean=false;
  constructor(
    private isroserverService:IsroserverService
  ) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(){
    this.loader=true;
    this.isroserverService.getData('centres').subscribe(
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
    this.centresData=data.centres;
  }

}
