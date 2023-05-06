import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  userData:any

  constructor( private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
      if(res){
        this.userData = res;
        console.log(res)
      }
    })
    
  }
}
