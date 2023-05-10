import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './container/list.component';
import { SearchModule } from '../search/search.module';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TablePipe } from 'src/app/pipes/table.pipe';


@NgModule({
  declarations: [
    ListComponent,
    TablePipe
  ],
  imports: [
    CommonModule,
    SearchModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    FontAwesomeModule,
    
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [ListComponent],
  providers: []
})
export class ListModule { }
