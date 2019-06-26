import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { SafePipe } from './safe.pipe';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DetailPage,
    SafePipe
  ],
  
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(DetailPage)
  ],
  
  exports: [
    SafePipe
  ]
})
export class DetailPageModule {}
