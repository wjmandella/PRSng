import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Status } from '@model/status';

const url = 'http://localhost:8080/Status/';
@Injectable()
export class StatusService {

 	list(): Observable<Status[]> {
		return this.http.get(url+"List") as Observable<Status[]>;
	}

	get(id): Observable<Status[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Status[]>;
	}

	create(status: Status): Observable<any> {
		return this.http.post(url+"Add", status) as Observable<any>;
	}

	change(status: Status): Observable<any> {
		return this.http.post(url+"Change", status) as Observable<any>;
	}

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
