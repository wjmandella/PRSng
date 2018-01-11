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
  product: Product = new Product();
  products: Product[];

	create() {
		console.log("this.prli:", this.prli);
    this.prli.PurchaseRequestID = this.purchaserequest.Id;
		this.PurchaseRequestLineItemSvc.create(this.prli)
			.subscribe(resp => {
				this.resp = resp;
				// console.log("PurchaseRequest-Create: PurchaseRequest (ID, PurchaseRequestname:" 
				// 	+this.purchaserequest.Id+", " +this.purchaserequest.Name+") created", this.resp);
				this.router.navigate(['/purchaserequestlineitem/list/'+this.prid]);		
			});
	}

  compareFn(p1: number, p2: number): boolean {
    console.log("compareFn", p1, p2);
    return p1 == p2;
  }  

   constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
   			   private PurchaseRequestSvc: PurchaseRequestService,
           private ProductSvc: ProductService, 
   			   private StatusSvc: StatusService,
           private VendorSvc: VendorService, 
   			   private UserSvc: UserService,
   			   private route: ActivatedRoute,
  			   private router: Router) { }


  ngOnInit() {
  	 this.route.params.subscribe(parms => this.prid = parms ['id']);
     console.log('prli create id = ',this.prid);
     this.PurchaseRequestSvc.get(this.prid)
       .subscribe(prs => {
         this.purchaserequest = prs.length > 0 ? prs[0] : null;
         console.log("This pr:", this.purchaserequest);
          });
       this.ProductSvc.list()
         .subscribe(pdts => {
         this.products = pdts;
         this.addVendorName(pdts);
       });
  } 

   addVendorName(prods: Product[]) {
     for(let prod of prods) {
         this.VendorSvc.get(prod.VendorID)
         .subscribe(vendors => { prod.VendorName = vendors[0].Name;
             console.log(prod);
           });
        //console.log("VendorName Retreived is " + prod.VendorName);
       }
    }
}
