import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/services/participant.service';
import { Termin } from 'src/app/models/Termin';
import { TerminService } from 'src/app/services/termin.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-participanti',
  templateUrl: './participanti.component.html',
  styleUrls: ['./participanti.component.css']
})

export class ParticipantiComponent implements OnInit {
  GGUID: string;
  participanti = Array<Participant>();
  participant: Participant;
  participantPreview = new Participant();
  termin: Termin;
  constructor(@Inject(forwardRef(() => ParticipantService)) public participantService: ParticipantService,
              @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute,
              @Inject(forwardRef(() => TerminService)) public terminService: TerminService) {
                this.GGUID = this.route.snapshot.paramMap.get('GGUID');
  }

  ngOnInit() {
    this.setParticipant();
    this.get();
  }
  get() {
    this.participantService.getParticipanti(this.GGUID).subscribe(data => {
      this.participanti = data;
      this.terminService.getTermin(this.GGUID).subscribe(data => {
        this.termin=data;
        })
    });
  }
  
  delete(gguid1: string){
    if (confirm("Želite li izbrisati odabranog participanta?"))
    {
    this.participantService.deleteParticipant(this.GGUID, gguid1).subscribe(data=> {
           this.get();
        });
      }
  }
  setParticipant() {
    this.participant = new Participant();
  }
}
