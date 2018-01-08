import { Component, OnInit } from '@angular/core';
import { Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [

    new Menu('HOME', '/home/list', 'Home menu item'), 
    new Menu('USER', '/user/list', 'User menu item'),
    new Menu('VENDOR', '/vendor/list', 'Vendor menu item'),
    new Menu('PRODUCT', '/product/list', 'Product menu item'),
    new Menu('PURCHASE REQUEST', '/purchaserequest/list', 'Purchase request menu item'),
    new Menu('LOGIN', '/user/login', 'Login menu item')           
  	// new Menu('HOME', '/home', 'Home menu item'),
  	// new Menu('ABOUT', '/about', 'About menu item'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
