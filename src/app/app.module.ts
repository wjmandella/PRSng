import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';


import { SortPipe } from './util/sort-pipe';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorService } from './service/vendor.service';

import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductService } from './service/product.service';

import { PurchaseRequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestService } from './service/purchaserequest.service';


import { PurchaseRequestLineItemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemListComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaseRequestLineItemService } from './service/purchaserequestlineitem.service';

import { StatusService } from './service/status.service';
import { SystemService } from './service/system.service';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SortPipe,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestListComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemListComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  	UserService,
    VendorService,
    ProductService,
    SystemService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
