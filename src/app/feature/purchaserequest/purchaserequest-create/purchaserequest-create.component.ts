import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@svc/user.service';
import { StatusService } from '@svc/status.service';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

	title: string = 'PurchaseRequest Create';

	id: string;
	resp: any;

	purchaserequest: PurchaseRequest = new PurchaseRequest();

	create() {
		console.log("this.purchaserequest:", this.purchaserequest);
		this.PurchaseRequestSvc.create(this.purchaserequest)
			.subscribe(resp => {
				this.resp = resp;
				// console.log("PurchaseRequest-Create: PurchaseRequest (ID, PurchaseRequestname:" 
				// 	+this.purchaserequest.Id+", " +this.purchaserequest.Name+") created", this.resp);
				this.router.navigate(['/purchaserequest/list']);		
			});
	}

   constructor(private PurchaseRequestSvc: PurchaseRequestService,
   			   private StatusSvc: StatusService,
   			   private UserSvc: UserService,
  			   private router: Router) { }


  ngOnInit() {
  }

}
