import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;


  constructor(private data: DataService) { }
  
  firstClick() {
    console.log('clicked');
    this.h1Style = true;
    console.log(this.data);
    this.data.clickyClick();
    //this.data.clickFromDS();
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    })
  }

}
