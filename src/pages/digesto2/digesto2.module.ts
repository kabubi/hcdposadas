import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Digesto2Page } from './digesto2';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    Digesto2Page,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(Digesto2Page),
  ],
  exports: [
    SafePipe
  ]
})
export class DigestoPage2Module {}
