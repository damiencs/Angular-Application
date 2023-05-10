import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './container/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
   
  ],
  exports: [HomepageComponent],
  providers: []
})
export class HomepageModule { }
