import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Vendor } from '@model/vendor';

const url = 'http://localhost:8080/Vendors/';
@Injectable()
export class VendorService {

	list(): Observable<Vendor[]> {
		return this.http.get(url+"List") as Observable<Vendor[]>;
	}

	get(id): Observable<Vendor[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Vendor[]>;
	}

	create(vendor: Vendor): Observable<any> {
		return this.http.post(url+"Add", vendor) as Observable<any>;
	}

	change(vendor: Vendor): Observable<any> {
		return this.http.post(url+"Change", vendor) as Observable<any>;
	}

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
