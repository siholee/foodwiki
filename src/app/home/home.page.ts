import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController, private route:Router, public vari:GlobalService) {

  }

  database = [
    {
      id: 1,
      title: 'おいしい牛丼'
    },
    {
      id: 2,
      title: '簡単なすき焼き'
    }
  ];

  movePost(){
    this.nav.navigateForward('/post');
  }

  moveSearch(){
    this.route.navigateByUrl("/option");
  }
}
