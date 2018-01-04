import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

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


  constructor(private ProductSvc: ProductService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	  	this.route.params.subscribe(parms => this.id = parms['id']);
  		this.ProductSvc.get(this.id)
  			.subscribe(products => { 
  				this.product = products.length > 0? products[0] : null;
  				console.log(this.product);
  		});
  }

}
