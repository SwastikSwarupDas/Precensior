import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelanderComponent } from './components/homelander/homelander.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewSoulComponent } from './components/new-soul/new-soul.component';
import { MarkPresenceComponent } from './components/mark-presence/mark-presence.component';
import { PresencesComponent } from './components/presences/presences.component';
import { BmcoffeeComponent } from './components/bmcoffee/bmcoffee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    HomelanderComponent,
    HomepageComponent,
    NavbarComponent,
    NewSoulComponent,
    MarkPresenceComponent,
    PresencesComponent,
    BmcoffeeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
