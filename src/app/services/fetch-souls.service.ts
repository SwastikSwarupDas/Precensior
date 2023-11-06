import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Soul {
  name: string;
  email: string;
  phone: string;
  uuid: string;
  presence: Record<string, any>;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchSoulsService {

  soulsData$!:Observable<Soul[]>;

  constructor(private soulFetch:HttpClient) { }

  enroll(userData:any){
    this.soulFetch.post('https://65420ff3f0b8287df1ff6ea8.mockapi.io/api/v1/souls',userData).subscribe((Response)=>{
      console.log('User Enrolled :',Response);
    })
  }

  fetchSoulData(){
    console.log('inside fetch soul data')
    this.soulsData$ = this.soulFetch.get<Soul[]>('https://65420ff3f0b8287df1ff6ea8.mockapi.io/api/v1/souls');
    return this.soulsData$;
  }
  
}
