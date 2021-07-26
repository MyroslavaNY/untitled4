import {Component, Input, OnInit} from '@angular/core';
import {IUserModels} from "../models/UserModels";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  userObj: IUserModels ={name:'', age:0,status:false}

  constructor() { }

  ngOnInit(): void {
  }

}
