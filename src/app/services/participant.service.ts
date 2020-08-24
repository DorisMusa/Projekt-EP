import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Response,RequestOptions,Headers, Http} from '@angular/http';



@Injectable()
export class ParticipantService {
    headers: Headers;
    options: RequestOptions;
    constructor(@Inject(forwardRef(() => Http)) public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Basic ' + btoa('student1:student1'));
        this.options = new RequestOptions({ headers: this.headers });

    }
    
    getParticipanti(gguid: string) {
        return this.http.get('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment/'
        + gguid + '/participant/full', this.options).
        pipe(map((res: Response) => res.json()));
    }
    
    deleteParticipant(gguid: string, gguid1: string) {
        return this.http.delete('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment/' + gguid +'/participant/'+ gguid1, this.options);
    }
}