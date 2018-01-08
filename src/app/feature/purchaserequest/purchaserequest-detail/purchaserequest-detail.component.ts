import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

	title: string = 'Purchase Request Detail';

	id: string;
	resp: any;

	purchaserequest: PurchaseRequest;

	remove() {
		console.log("this.purchaserequest.id", this.purchaserequest.Id);
		this.PurchaseRequestSvc.remove(this.purchaserequest.Id)
			.subscribe(resp => {
				this.resp = resp;
				// console.log("Purchase Request-Detail-Remove: Purchase Request (ID:" 
				// 	+this.purchaserequest.Id+", " +this.purchaserequest.LastName+") removed", this.resp);
				this.router.navigate(['/purchaserequest/list']);		
			});
	}


  constructor(private PurchaseRequestSvc: PurchaseRequestService,
  	
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.PurchaseRequestSvc.get(this.id)
  		.subscribe(purchaserequests => { 
  			this.purchaserequest = purchaserequests.length > 0? purchaserequests[0] : null;
  			console.log(this.purchaserequest);
  		});
  }

}
