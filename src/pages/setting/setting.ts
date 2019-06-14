import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor() {
  }

  ionViewWillEnter(){
    localStorage.setItem('tbPage','3');
   }
}
