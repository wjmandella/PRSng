import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@svc/user.service';
import { StatusService } from '@svc/status.service';
import { PurchaseRequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaseRequestLineItemService } from '@svc/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']

})
export class PurchaseRequestLineItemEditComponent implements OnInit {

 	title: string = 'Edit PR Line Item';

	id: string;
	resp: any;
	prid: number;
  product: Product;
  vendors: Vendor[];

	purchaserequest: PurchaseRequest = new PurchaseRequest();
	prli : PurchaseRequestLineItem = new PurchaseRequestLineItem();

  change() {
    console.log("this.prli", this.prli);
    this.PurchaseRequestLineItemSvc.change(this.prli)
      .subscribe(resp => {
        this.resp = resp;
        // console.log("PRLI-Change: Product (ID, Last name:" 
        //   +this.product.Id+", " +this.product.Name+") updated", this.resp);
        this.router.navigate(['/purchaserequest/list/'+this.prid]);    
      });
  }


  //   compareFn(v1: number, v2: number): boolean {
  //   // console.log("compareFn", v1, v2);
  //   return v1 == v2;
  // }  

   constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
   			       private PurchaseRequestSvc: PurchaseRequestService,
               private ProductSvc: ProductService,
               private VendorSvc: VendorService,
   			       private StatusSvc: StatusService,
   			       private UserSvc: UserService,
   			       private route: ActivatedRoute,
  			       private router: Router) { }


   ngOnInit() {
     this.route.params.subscribe(parms => { this.id = parms ['id'];
                                            this.prid = parms ['prid']; }); 
     this.PurchaseRequestSvc.get(this.id)
       .subscribe(prs => this.purchaserequest = prs.length > 0 ? prs[0] : null);                       
     this.PurchaseRequestLineItemSvc.get(this.id)
       .subscribe(prlis => this.prli = prlis.length > 0 ? prlis[0] : null);
      this.ProductSvc.get(this.id)
        .subscribe(products => this.product = products.length > 0? products[0] : null);
      this.VendorSvc.list()
        .subscribe(vendors => this.vendors = vendors);    
    }
}
