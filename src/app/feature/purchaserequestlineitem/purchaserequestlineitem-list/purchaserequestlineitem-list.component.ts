import { Component, OnInit } from '@angular/core';

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
  selector: 'app-purchaserequestlineitem-list',
  templateUrl: './purchaserequestlineitem-list.component.html',
  styleUrls: ['./purchaserequestlineitem-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {

 title: string = 'PurchaseRequestLineItem List';
	selectedSortKey: string = 'id'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	// sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
	
	prlis: PurchaseRequestLineItem[]; 
  	vendors: Vendor[];
  	products: Product[];
    users: User[];

  constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
			  private PurchaseRequestSvc: PurchaseRequestService,  	
              private VendorSvc: VendorService,
              private ProductSvc: ProductService,
              private UserSvc: UserService) { }

  ngOnInit() {
  	this.PurchaseRequestLineItemSvc.list()
  		.subscribe(prlis => {
  			this.prlis = prlis;
    // this.addVendorName(this.purchaserequests);  
  			console.log(prlis);
      });
  }

}
