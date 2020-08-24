import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminiComponent } from './components/termini/termini.component';

import { TerminService } from './services/termin.service';
import { DatePipe } from '@angular/common';
import { ParticipantiComponent } from './components/participanti/participanti.component';
import { ParticipantService } from './services/participant.service';

@NgModule({
  declarations: [
    AppComponent,
    TerminiComponent,
    ParticipantiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [TerminService, DatePipe, ParticipantService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
