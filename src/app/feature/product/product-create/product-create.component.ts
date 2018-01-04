import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	title: string = 'Product Create';

	id: string;
	resp: any;

	product: Product = new Product();

	create() {
		console.log("this.product:", this.product);
		this.ProductSvc.create(this.product)
			.subscribe(resp => {
				this.resp = resp;
				console.log("Product-Create: Product (ID, Productname:" 
					+this.product.Id+", " +this.product.Name+") created", this.resp);
				this.router.navigate(['/product/list']);		
			});
	}

   constructor(private ProductSvc: ProductService,
  			   private router: Router) { }


  ngOnInit() {
  }

}
