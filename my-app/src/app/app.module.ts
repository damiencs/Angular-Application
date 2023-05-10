import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExcelService } from './services/excel.service';
import { AppComponent } from './app.component';
import { HomepageModule } from './features/homepage/homepage.module';
import { HeaderModule } from './features/header/header.module';
import {FooterModule} from './features/Footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { bodyService } from './services/body.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HomepageModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ExcelService,bodyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
