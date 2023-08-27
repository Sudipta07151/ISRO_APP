import { Component, OnInit } from '@angular/core';
import { IsroserverService } from '../isroserver.service';

@Component({
  selector: 'app-spacecrafts',
  templateUrl: './spacecrafts.component.html',
  styleUrls: ['./spacecrafts.component.css']
})
export class SpacecraftsComponent implements OnInit {
  loader=false;
  spaceCraftData: any=[];
  constructor(
    private isroserverService:IsroserverService
  ) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(){
    this.loader=true;
    this.isroserverService.getData('spacecrafts').subscribe(
      (data)=>{
        this.loader=false;
        console.log(data)
        this.mapData(data);
    },
    (err)=>{
      console.log(err)
    },
    ()=>{
      console.log('RESOLVED')
    }
    )
  }

  mapData(data:any){
    console.log(data)
    this.spaceCraftData=data.spacecrafts;
  }
}
