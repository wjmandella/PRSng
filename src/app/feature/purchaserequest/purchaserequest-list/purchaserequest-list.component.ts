import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  title: string = 'PurchaseRequest List';
	selectedSortKey: string = 'id'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	sortKeys: string[] = PurchaseRequest.sortableKeys;
	
	purchaserequests: PurchaseRequest[]; 
  	vendors: Vendor[];
  	products: Product[];
    users: User[];

  constructor(private PurchaseRequestSvc: PurchaseRequestService,
              private VendorSvc: VendorService,
              private ProductSvc: ProductService,
              private UserSvc: UserService) { }

  ngOnInit() {
  	this.PurchaseRequestSvc.list()
  		.subscribe(purchaserequests => {
  			this.purchaserequests = purchaserequests;
    // this.addVendorName(this.purchaserequests);  
  			console.log(purchaserequests);
      });
  }

 // addVendorName(prods: PurchaseRequest[]) {
 //   for(let prod of prods) {
 //      // console.log("Getting Vendor Name for VendorId: " + prod.cVendorID);
 //      this.VendorSvc.get(prod.VendorID)
 //       .subscribe(vendors => { prod.VendorName = vendors[0].Name;
 //           console.log(prod);
 //         });
 //      //console.log("VendorName Retreived is " + prod.VendorName);
 //     }
  // }
    //  addUserName(prs: PurchaseRequest[]) {
    //    for(let user of this.users) {
    //       this.UserSvc.get(user.ID)
    //        .subscribe(vendors => { pr.UserName = users[0].Name;
    //          console.log(pr);
    //        });
    //    }
    // }

 //   products: Product[];
 //  vendors: Vendor[];
     
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
