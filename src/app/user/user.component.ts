import { Component, OnInit } from '@angular/core';
import { User } from '../modals/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [
    {
    id: 1,
    name: 'vikas',
    gender: 'male',
    phoneNumber: 7987989087,
    photoPath:'assets/images/default.jpg' 
   },{
    id: 2,
    name: 'pankaj',
    gender: 'male',
    phoneNumber: 7987934087,
    photoPath:'assets/images/default.jpg' 
   
   }
  ]

  constructor() { }

  ngOnInit() {
  }

}
