import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '@model/purchaserequest';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PurchaseRequestService {

	list(): Observable<PurchaseRequest[]> {
		return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
	}

	get(id): Observable<PurchaseRequest[]> {
		return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequest[]>;
	}

	create(purchaserequest: PurchaseRequest): Observable<any> {
		return this.http.post(url+"Add", purchaserequest) as Observable<any>;
	}

	change(purchaserequest: PurchaseRequest): Observable<any> {
		return this.http.post(url+"Change", purchaserequest) as Observable<any>;
	}

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
