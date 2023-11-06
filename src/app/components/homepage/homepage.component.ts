import { Component } from '@angular/core';
import { FetchSoulsService } from 'src/app/services/fetch-souls.service';
import { MatTable } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { Soul } from 'src/app/services/fetch-souls.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

 
  soulsData:Soul[]=[];
  displayedColumns: string[] = ['id','name','phone','email'];
  dataSource:Soul[]=[];

  constructor(private fetchSoulsService : FetchSoulsService){

  }

  ngOnInit(){
    window.scrollTo (0,0);
    this.fetchSoulsService.fetchSoulData().subscribe((data)=>{
      this.soulsData=data;
      this.dataSource=this.soulsData;
    })
  }

}
