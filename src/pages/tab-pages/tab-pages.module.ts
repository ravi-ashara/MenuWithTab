import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPagesPage } from './tab-pages';

@NgModule({
  declarations: [
    TabPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPagesPage),
  ]
})
export class TabPagesPageModule {}
