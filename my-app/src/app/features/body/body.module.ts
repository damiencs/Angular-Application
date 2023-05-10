import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './container/body.component';
import { BodyRoutingModule } from './body-routing.module';
import { SearchModule } from '../search/search.module';
import { ListModule } from '../list/list.module';


@NgModule({
  declarations: [
    BodyComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    SearchModule,
    ListModule,
    
  ],
  exports: [BodyComponent],
  providers: []
})
export class BodyModule { }
