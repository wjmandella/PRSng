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
	selectedSortKey: string = 'Id'; //default sort
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
          this.addPRUserName(this.purchaserequests);
          console.log(purchaserequests);
        });
  }

   addPRUserName(prs: PurchaseRequest[]) {
     for(let pr of prs) {
        this.UserSvc.get(pr.UserID)
         .subscribe(users => { pr.UserLastName = users[0].LastName;
             console.log(pr);
           });
       }
    }

      setStatus
   
}
