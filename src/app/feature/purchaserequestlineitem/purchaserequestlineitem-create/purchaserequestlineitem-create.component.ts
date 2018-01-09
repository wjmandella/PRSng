import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@svc/user.service';
import { StatusService } from '@svc/status.service';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaseRequestLineItemService } from '@svc/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

 	title: string = 'Add PR Line Item';

	id: string;
	resp: any;
	prid: number;

	purchaserequest: PurchaseRequest = new PurchaseRequest();
	prli : PurchaseRequestLineItem = new PurchaseRequestLineItem();

	create() {
		console.log("this.prli:", this.prli);
		this.PurchaseRequestLineIemSvc.create(this.prli)
			.subscribe(resp => {
				this.resp = resp;
				// console.log("PurchaseRequest-Create: PurchaseRequest (ID, PurchaseRequestname:" 
				// 	+this.purchaserequest.Id+", " +this.purchaserequest.Name+") created", this.resp);
				this.router.navigate(['/purchaserequest/list/'+this.prid]);		
			});
	}

   constructor(private PurchaseRequestLineIemSvc: PurchaseRequestLineItemService,
   			   private PurchaseRequestSvc: PurchaseRequestService,
   			   private StatusSvc: StatusService,
   			   private UserSvc: UserService,
   			   private route: ActivatedRoute,
  			   private router: Router) { }


  ngOnInit() {
  	 this.route.params.subscribe(parms => this.prid = parms ['id']);
     this.PurchaseRequestSvc.get(this.prid)
       .subscribe(prs => {
         this.purchaserequest = prs.length > 0 ? prs[0] : null;
         console.log("This pr:", this.purchaserequest);
          });
  }

}
