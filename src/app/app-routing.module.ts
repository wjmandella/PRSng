import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';

import { PurchaseRequestLineItemCreateComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemDetailComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemEditComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemListComponent } from './feature/purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { path: 'user/detail/:id', component: UserDetailComponent}, //from more specific to more general
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/login', component: UserLoginComponent},
  { path: 'vendor/detail/:id', component: VendorDetailComponent}, 
  { path: 'vendor/edit/:id', component: VendorEditComponent},
  { path: 'vendor/create', component: VendorCreateComponent},
  { path: 'vendor/list', component: VendorListComponent},
  { path: 'product/detail/:id', component: ProductDetailComponent}, 
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/create', component: ProductCreateComponent},
  { path: 'product/list', component: ProductListComponent},
  { path: 'purchaserequest/detail/:id', component: PurchaseRequestDetailComponent}, 
  { path: 'purchaserequest/edit/:id', component: PurchaseRequestEditComponent},
  { path: 'purchaserequest/create', component: PurchaseRequestCreateComponent},
  { path: 'purchaserequest/list', component: PurchaseRequestListComponent},
  { path: 'purchaserequestlineitem/detail/:id/:prid', component: PurchaseRequestLineItemDetailComponent}, 
  { path: 'purchaserequestlineitem/edit/:id', component: PurchaseRequestLineItemEditComponent},
  { path: 'purchaserequestlineitem/create/:id', component: PurchaseRequestLineItemCreateComponent},
  { path: 'purchaserequestlineitem/list/:id', component: PurchaseRequestLineItemListComponent},
  { path: 'home', component: HomeComponent},    
  { path: '**', component: HomeComponent} 
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }