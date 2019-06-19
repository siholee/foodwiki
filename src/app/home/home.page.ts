import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  item1 = [
    'おいしい牛丼',
    '簡単なすき焼き'
  ];

}
