import { Component, OnInit } from '@angular/core';
import { IsroserverService } from '../isroserver.service';
import { launcher_model } from '../models/launcher_model';

@Component({
  selector: 'app-launchers',
  templateUrl: './launchers.component.html',
  styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
  launcherData:launcher_model[]=[];
  loader=false;
  constructor(
    private isroserverService:IsroserverService
  ) { 
  }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(){
    this.loader=true;
    this.isroserverService.getData('launchers').subscribe(
      (data)=>{
        this.mapData(data);
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
    this.launcherData=data.launchers;
  }
}
