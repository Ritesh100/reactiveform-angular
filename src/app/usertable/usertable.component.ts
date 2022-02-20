import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {
tableData=[
  {
    id: '001',
    name: 'Ritesh Thapa',
    address: 'Kathmandu',
    age: 22,
  },
  {
    id: '002',
    name: 'Bibek Khatri',
    address: 'Bhaktapur',
    age: 22,
  },
  {
    id: '003',
    name: 'Santosh Kalathoki',
    address: 'Dang',
    age: 22,
  },
]
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }
  onNavigateById(
    id: string,
    paramName: string,
    paramAddress: string,
    paramAge: number
  ) {
    this.router.navigate(['/userdetail', id], {
      queryParams: {
        id: id,
        name: paramName,
        address: paramAddress,
        age: paramAge,
      },
    });
  }

}
