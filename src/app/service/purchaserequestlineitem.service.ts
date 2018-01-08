import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';
@Injectable()
export class PurchaseRequestLineItemService {

	list(): Observable<PurchaseRequestLineItem[]> {
		return this.http.get(url+"List") as Observable<PurchaseRequestLineItem[]>;
	}

	get(id): Observable<PurchaseRequestLineItem[]> {
		return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequestLineItem[]>;
	}

	create(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
		return this.http.post(url+"Add", purchaserequestlineitem) as Observable<any>;
	}

	change(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
		return this.http.post(url+"Change", purchaserequestlineitem) as Observable<any>;
	}

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
