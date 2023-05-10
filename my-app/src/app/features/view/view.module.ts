import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewComponent } from './container/view.component';
import { ViewRoutingModule } from './view-routing.module';
import {MatCardModule} from '@angular/material/card';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [ViewComponent],
  providers: []
})
export class ViewModule { }