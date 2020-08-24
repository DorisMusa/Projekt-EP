import { Injectable, ErrorHandler } from '@angular/core';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Response,RequestOptions,Headers, Http} from '@angular/http';

@Injectable()
export class TerminService {
    headers: Headers;
    options: RequestOptions;
    constructor(@Inject(forwardRef(() => Http)) public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Basic ' + btoa('student1:student1'));
        this.options = new RequestOptions({ headers: this.headers });
    }

    getTermini() {
        return this.http.get('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment/full', this.options).
        pipe(map((res: Response) => res.json()));
    }
    getTermin(gguid: string) {
        return this.http.get('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment/' + gguid, this.options).
        pipe(map((res: Response) => res.json()));
    }
     
    insertTermin(termin) {
        return this.http.post('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment', termin, this.options);
    }

    deleteTermin(gguid: string) {
        return this.http.delete('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/appointment/' + gguid, this.options);
    }
    
}


