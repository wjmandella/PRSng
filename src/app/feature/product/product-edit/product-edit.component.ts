import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

	title: string = 'Product Edit';

	id: string;
	resp: any;

	product: Product;
	vendors: Vendor[];

	change() {
		console.log("this.product.id", this.product);
		this.ProductSvc.change(this.product)
			.subscribe(resp => {
				this.resp = resp;
				console.log("Product-Change: Product (ID, Last name:" 
					+this.product.Id+", " +this.product.Name+") updated", this.resp);
				this.router.navigate(['/product/list']);		
			});
	}

  compareFn(v1: number, v2: number): boolean {
    // console.log("compareFn", v1, v2);
  	return v1 == v2;
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
  				console.log(this.product);
  		this.VendorSvc.list()
  			.subscribe(vendors => this.vendors = vendors);		
  		});
  	}
}
