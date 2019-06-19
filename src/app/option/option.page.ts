import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  movePost(){
    this.nav.navigateForward('/search');
  }

  spitMessage(){
    alert('準備中です');
  }

}
