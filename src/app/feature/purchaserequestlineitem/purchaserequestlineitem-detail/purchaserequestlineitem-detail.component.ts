import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaseRequestLineItemService } from '@svc/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {

	title: string = 'PRLI Details';
	selectedSortKey: string = 'Name'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	sortKeys: string[] = Product.sortableKeys;
	products: Product[];
    vendors: Vendor[];
	id: number;
	prid: number;
	prlis: PurchaseRequestLineItem[] = [];
	prli: PurchaseRequestLineItem; 
  users: User[];
  purchaserequests: PurchaseRequest[]=[];
  purchaserequest: PurchaseRequest;

  constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
			        private PurchaseRequestSvc: PurchaseRequestService,  	
              private VendorSvc: VendorService,
              private ProductSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private UserSvc: UserService) { }

  // ngOnInit() {
  // 	this.ProductSvc.list()
  // 		.subscribe(products => {
  // 			this.products = products;
  //   this.addVendorName(this.products);  
  // 			console.log(products);
  //     });
  // }
   ngOnInit() {
     this.route.params.subscribe(parms => { this.id = parms ['id'];
											this.prid = parms ['prid']; }); 
	 this.PurchaseRequestSvc.get(this.id)
       .subscribe(prs => this.purchaserequest = prs.length > 0 ? prs[0] : null);										   
     this.PurchaseRequestLineItemSvc.get(this.id)
       .subscribe(prlis => {
         this.prli = prlis.length > 0 ? prlis[0] : null;
         // this.prli = prlis;
         console.log("This pr:", this.purchaserequest);
         // this.PurchaseRequestLineItemSvc.list()
         //   .subscribe(prlis => {
         //      this.prlis = this.selectedPRLIs(prlis);
         });
     
   }

	 // addVendorName(prods: Product[]) {
	 //   for(let prod of prods) {
	 //      // console.log("Getting Vendor Name for VendorId: " + prod.cVendorID);
	 //      this.VendorSvc.get(prod.VendorID)
	 //       .subscribe(vendors => { prod.VendorName = vendors[0].Name;
	 //           console.log(prod);
	 //         });
	 //      //console.log("VendorName Retreived is " + prod.VendorName);
	 //     }
	 //  }
}
