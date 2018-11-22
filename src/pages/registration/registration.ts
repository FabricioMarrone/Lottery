import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'registration.html'
})
export class RegistrationComp {
  step: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let nextStep: any = navParams.get('nextStep');

    if(nextStep){
        this.step = nextStep;
    }
  }

  generateCode(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RegistrationComp, {
      nextStep: this.step + 1
    });
  }

}
