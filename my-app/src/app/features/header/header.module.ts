import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './container/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule { }
