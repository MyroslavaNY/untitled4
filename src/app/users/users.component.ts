import { Component, OnInit } from '@angular/core';
import {IUserModels} from "../models/UserModels";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
users: IUserModels[] = [
    {name:'vasya', age: 31, status: false},
    {name:'petya', age: 30, status: true},
    {name:'kolya', age: 29, status: true},
    {name:'olya', age: 28, status: false},
    {name:'max', age: 30, status: true},
    {name:'anya', age: 31, status: false},
    {name:'oleg', age: 28, status: false},
    {name:'andriy', age: 31, status: true},
    {name:'masha', age: 25, status: false},
    {name:'olya', age: 22, status: true},
    {name:'vasya', age: 35, status: true},


  ];
  constructor() { }



}
