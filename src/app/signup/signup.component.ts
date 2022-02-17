// import { Component, OnInit } from '@angular/core';

// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   SendData(dataFromForm:NgForm)
//   {
//               console.log("data of the form", dataFromForm.value);
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  SendData(dataFormForm:NgForm){
console.log("data of the form", dataFormForm.value);
  }
  constructor() { }
  
  ngOnInit(): void {

    
  }
isNumber(evt:any) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
