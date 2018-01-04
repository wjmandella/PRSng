import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	title: string = 'User List';
	selectedSortKey: string = 'id'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	sortKeys: string[] = User.sortableKeys;
	users: User[];

  constructor(private UserSvc: UserService) { }

  ngOnInit() {
  	this.UserSvc.list()
  		.subscribe(users => {
  			this.users = users;
  			console.log(users);
  		});
  }

}
