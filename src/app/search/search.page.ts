import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  database = [
    'Curry',
    "BBQ",
    'Ramen'
  ];

  QueryText : string;

  movePost(){
    this.nav.navigateForward('/post');
  }

  search(){
    this.nav.navigateForward('/list');
  }

}
