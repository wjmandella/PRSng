import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '@model/user';

const url = 'http://localhost:8080/Users/';

@Injectable()
export class UserService {

	// users: User[];

	// authenticate(user: User): Observable<User[]> {
	// 	return this.http.post(url+"Authenticate", user) as Observable<User[]>;
	// }

	list(): Observable<User[]> {
		return this.http.get(url+"List") as Observable<User[]>;
	}

	get(id): Observable<User[]> {
		return this.http.get(url+"Get?id="+id) as Observable<User[]>;
	}

	create(user: User): Observable<any> {
		return this.http.post(url+"Add", user) as Observable<any>;
	}

	change(user: User): Observable<any> {
		return this.http.post(url+"Change", user) as Observable<any>;
	}

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
