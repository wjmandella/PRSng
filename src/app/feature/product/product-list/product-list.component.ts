import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	title: string = 'Product List';
	selectedSortKey: string = 'Name'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	sortKeys: string[] = Product.sortableKeys;
	products: Product[];
  vendors: Vendor[];

  constructor(private ProductSvc: ProductService,
              private VendorSvc: VendorService) { }

  ngOnInit() {
  	this.ProductSvc.list()
  		.subscribe(products => {
  			this.products = products;
    this.addVendorName(this.products);  
  			console.log(products);
      });
  }

 addVendorName(prods: Product[]) {
   for(let prod of prods) {
      // console.log("Getting Vendor Name for VendorId: " + prod.cVendorID);
      this.VendorSvc.get(prod.VendorID)
       .subscribe(vendors => { prod.VendorName = vendors[0].Name;
           console.log(prod);
         });
      //console.log("VendorName Retreived is " + prod.VendorName);
     }
  }
}  
