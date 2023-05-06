import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentDate = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  day:any;
  month:any;
  year:any;

  ngOnInit(): void {
    this.day = this.currentDate.getDay();
    this.month = this.monthNames[this.currentDate.getMonth()];
    this.year = this.currentDate.getFullYear().toString().substring(2);
  }
}
