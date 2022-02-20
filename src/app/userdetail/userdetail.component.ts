import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  userDetails ={
  id:'',
  name: '',
  address:'',
  age: 0
  };
  constructor() { }

  ngOnInit(): void {
  }


}
