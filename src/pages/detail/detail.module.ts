import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    DetailPage,
    SafePipe,
    //ParallaxDirective
  ],
  
  imports: [
    IonicPageModule.forChild(DetailPage),
  ],
  
  exports: [
    SafePipe
  ]
})
export class DetailPageModule {}
