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
  selector: 'app-purchaserequestlineitem-list',
  templateUrl: './purchaserequestlineitem-list.component.html',
  styleUrls: ['./purchaserequestlineitem-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {

    title: string = 'PurchaseRequestLineItem List';
	  selectedSortKey: string = 'id'; //default sort
	  sortDesc: string = 'asc'; // can use 'desc' for descending sort

  // sortKeys: string[] = PurchaseRequestLineItem.sortableKeys;
 
	  id: number;
	  prlis: PurchaseRequestLineItem[] = []; 
  	vendors: Vendor[];
  	products: Product[];
    users: User[];
    purchaserequests: PurchaseRequest[]=[];
    // purchaserequest: PurchaseRequest;
    pr: PurchaseRequest;

  constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
			        private PurchaseRequestSvc: PurchaseRequestService,  	
              private VendorSvc: VendorService,
              private ProductSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private UserSvc: UserService) { }


   selectedPRLIs (prlis: PurchaseRequestLineItem[]) {
       let tempArray: PurchaseRequestLineItem[]=[];
       for (let prli of prlis){
         if (prli.PurchaseRequestID == this.pr.Id){
           console.log("Pr ID:", this.pr.Id);
           tempArray.push(prli);
         }
       }
       console.log("tempArray:", tempArray);
       return tempArray;
     }


   ngOnInit() {
     this.route.params.subscribe(parms => this.id = parms ['id']);
     this.PurchaseRequestSvc.get(this.id)
       .subscribe(prs => {
         this.pr = prs.length > 0 ? prs[0] : null;
         console.log("This pr:", this.pr);
         this.PurchaseRequestLineItemSvc.list()
           .subscribe(prlis => {
              this.prlis = this.selectedPRLIs(prlis);
         })
     });
   }
}


