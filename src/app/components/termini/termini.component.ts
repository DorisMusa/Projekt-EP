import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TerminService } from '../../services/termin.service';
import { ParticipantService } from '../../services/participant.service';
import { Termin } from '../../models/Termin';

declare var $: any;

@Component({
  selector: 'app-termini',
  templateUrl: './termini.component.html',
  styleUrls: ['./termini.component.css']
})

@Injectable()
export class TerminiComponent implements OnInit {
  termini: Array<Termin>;
  termin: Termin;
  terminPreview: Termin;
  totalRecords: string;
  page: number=1;
  term: string;
  GGUID: string;
  

  constructor(@Inject(forwardRef(() => TerminService)) private terminService: TerminService,
              @Inject(forwardRef(() => DatePipe)) private datePipe: DatePipe,
              @Inject(forwardRef(() => ParticipantService)) public participantService: ParticipantService) {
                this.termini = Array<Termin>();
                this.termin = new Termin();
                this.terminPreview = new Termin();
    datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    this.setTermin();
    this.get();
  }
  get() {
    this.terminService.getTermini().subscribe(data => {
      this.termini = data;
      this.totalRecords=data.length;
      console.log(this.page);
        });
  }

  delete(GGUID: string){
    if (confirm("Želite li izbrisati odabrani termin?"))
    {
    this.terminService.deleteTermin(GGUID).subscribe(data=>{
          this.get();
        });
      }
  }

  insert() {
    const date1 = $('#m_datetimepicker_1').val();
    const date11 = new Date(date1);
    date11.setHours(date11.getHours()-2);
    const date2 = $('#m_datetimepicker_2').val();
    const date22 = new Date(date2);
    date22.setHours(date22.getHours()-2);

    this.termin.fields.START_DT = this.datePipe.transform(date11, 'yyyy-MM-ddTHH:mm:ss.SSS');
    this.termin.fields.END_DT = this.datePipe.transform(date22, 'yyyy-MM-ddTHH:mm:ss.SSS');
    this.termin.fields.START_DT = this.termin.fields.START_DT + 'Z';
    this.termin.fields.END_DT = this.termin.fields.END_DT + 'Z';
    console.log(JSON.stringify(this.termin));
    
    this.terminService.insertTermin(JSON.stringify(this.termin)).subscribe(data => {
      this.get();
      this.setTermin();
    });
  }
  
  setTermin() {
    this.termin = new Termin();
    this.termin.fields.START_DT = this.datePipe.transform(Date.now(), 'yyyy/MM/dd HH:mm');
    this.termin.fields.END_DT = this.datePipe.transform(Date.now(), 'yyyy/MM/dd HH:mm');
  }

  preview(pro: Termin) {
    this.terminPreview = pro;
  }
  }


