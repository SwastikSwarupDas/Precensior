import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FetchSoulsService} from '../../services/fetch-souls.service';

@Component({
  selector: 'app-new-soul',
  templateUrl: './new-soul.component.html',
  styleUrls: ['./new-soul.component.scss']
})
export class NewSoulComponent {
  inputForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private fetchSoulsService:FetchSoulsService){
    this.inputForm = this.formBuilder.group({
      name:'',
      email:'',
      phone:'',
      id:[{value:'',disabled:true},Validators.required]
    });
  }

  enroll(){
    const userData = this.inputForm.value;
    this.fetchSoulsService.enroll(userData);
    this.inputForm.reset();
  }
   
  generateUniqueId(){
    const uniqueId = uuidv4(); 
    this.inputForm.get('id')?.setValue(uniqueId);
  }

}
