import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	title: string = 'Product Detail';

	id: string;
	resp: any;

	product: Product;
	products: Product[];
	vendors: Vendor[];


	remove() {
		console.log("this.product.id", this.product.Id);
		this.ProductSvc.remove(this.product.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log("Product-Detail-Remove: Product (ID:" 
					+this.product.Id+", " +this.product.Name+") removed", this.resp);
				this.router.navigate(['/product/list']);		
			});
	}


  constructor(private ProductSvc: ProductService,
  		      private VendorSvc: VendorService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.ProductSvc.get(this.id)
  		.subscribe(products => { 
  			this.product = products.length > 0? products[0] : null;
  			this.product.VendorName;
  			console.log(this.product);
  		});
    }

 //  ngOnInit() {
 //  	this.ProductSvc.list()
 //  		.subscribe(products => {
 //  			this.products = products;
 //    this.addVendorName(this.products);  
 //  			console.log(products);
 //      });
 //  }

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
