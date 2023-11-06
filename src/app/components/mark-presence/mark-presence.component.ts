import { Component, ViewChild } from '@angular/core';
import { MatFormField} from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { Soul,FetchSoulsService } from 'src/app/services/fetch-souls.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-mark-presence',
  templateUrl: './mark-presence.component.html',
  styleUrls: ['./mark-presence.component.scss']
})
export class MarkPresenceComponent {
  selectedUserId!:any;
  soulsData:Soul[]=[];
  disabled:boolean=true;
  disabled2:boolean=false;
  selectedUser:Soul|null=null;
  date: Date[] | undefined;
  proceed:boolean=true;

  constructor(private fetchSoulService:FetchSoulsService){}

  ngOnInit(){
    this.fetchSoulService.fetchSoulData().subscribe((data)=>{
      this.soulsData = data;
    });
  }

  markAttendance(){
    console.log(this.selectedUserId);
    const user = this.soulsData.find((user) => user.uuid===this.selectedUserId);
    this.selectedUser = user||null;
    console.log(this.selectedUser);
    this.disabled=!this.disabled;
  }

  datePicked(){
    console.warn(this.date);
  }

}
