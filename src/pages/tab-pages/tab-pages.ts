import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabPagesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-pages',
  templateUrl: 'tab-pages.html'
})
export class TabPagesPage {
  public tabIndex:Number;
  homeRoot = 'HomePage'
  aboutRoot = 'AboutPage'
  contactRoot = 'ContactPage'
  settingRoot = 'SettingPage'

  constructor(public navCtrl: NavController) {
    if(localStorage.getItem('tbPage') != null){
      this.tabIndex = parseInt(localStorage.getItem('tbPage'));
    }else{
      this.tabIndex = 0;
    }
  }

}
