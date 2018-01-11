import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

	title: string = 'PurchaseRequest Create';

	resp: any;

	purchaserequest: PurchaseRequest = new PurchaseRequest();
	users: User[];

	create() {
		console.log("this.purchaserequest:", this.purchaserequest);
		this.PurchaseRequestSvc.create(this.purchaserequest)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/purchaserequest/list']);		
			});
	}

	compareFn(u1: number, u2: number) {
        return u1 == u2;
    }


   constructor(private PurchaseRequestSvc: PurchaseRequestService,
   			   private StatusSvc: StatusService,
   			   private SysSvc: SystemService,
   			   private UserSvc: UserService,
  			   private router: Router) { }


  ngOnInit() {
  	  	this.UserSvc.list()
  		.subscribe(users => {
  			this.users = users;
  			console.log(users);
  		});
  		if(this.SysSvc.data.user.loggedIn) {
  			this.purchaserequest.UserID = this.SysSvc.data.user.instance.Id;
  			this.purchaserequest.UserName = this.SysSvc.data.user.instance.UserName;
  		}
  		else {
  			console.error("User not logged in.");
  		}
  }

}
