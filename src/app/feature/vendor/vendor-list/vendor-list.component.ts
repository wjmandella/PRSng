import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

	title: string = 'Vendor List';
	selectedSortKey: string = 'Name'; //default sort
	sortDesc: string = 'asc'; // can use 'desc' for descending sort
	sortKeys: string[] = Vendor.sortableKeys;
	vendors: Vendor[];

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
  	this.VendorSvc.list()
  		.subscribe(vendors => {
  			this.vendors = vendors;
  			console.log(vendors);
  		});
  }
}
