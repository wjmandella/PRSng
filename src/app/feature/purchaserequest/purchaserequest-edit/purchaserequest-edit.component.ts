import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';


@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

	title: string = 'Purchase Request Edit';

	id: string;
	resp: any;

	purchaserequest: PurchaseRequest;

	change() {
		console.log("this.purchaserequest.id", this.purchaserequest);
		this.PurchaseRequestSvc.change(this.purchaserequest)
			.subscribe(resp => {
				this.resp = resp;
				// console.log("PurchaseRequest-Change: PurchaseRequest (ID, Last name:" 
				// 	+this.purchaserequest.Id+", " +this.purchaserequest.LastName+") updated", this.resp);
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
