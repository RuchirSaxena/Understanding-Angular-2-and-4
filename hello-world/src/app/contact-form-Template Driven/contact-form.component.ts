import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  contactMethods= [{
    id:1,
    name:"Phone"
  },
  {
    id:2,
    name:"Email"
  },
  {
    id: 3,
    name:"Mobile No"
  }
];

memberTypes= [{
  id:1,
  name:"Gold"
},
{
  id:2,
  name:"Silver"
},
{
  id: 3,
  name:"Other"
}
];
  log(firstName) {
    console.log(firstName);

  }
  submmit(form){
    console.log(form);
  } 



}
