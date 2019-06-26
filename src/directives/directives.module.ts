// directives.module.ts
import { NgModule } from '@angular/core';
import {ParallaxDirective} from 'ionic-header-parallax';

@NgModule({
  declarations: [
    ParallaxDirective
  ],
  exports:[
    ParallaxDirective
  ]
})
export class DirectivesModule {}