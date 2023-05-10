import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './container/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCardModule,
  ],
  exports: [FooterComponent],
  providers: []
})
export class FooterModule { }