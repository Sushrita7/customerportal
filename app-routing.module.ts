import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditdebitComponent } from './Customer Portal/creditdebit/creditdebit.component';
import { CustomerdetailComponent } from './Customer Portal/customerdetail/customerdetail.component';
import { CustomereditComponent } from './Customer Portal/customeredit/customeredit.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { DeliverygetComponent } from './Customer Portal/deliveryget/deliveryget.component';
import { GetpaymentagingComponent } from './Customer Portal/getpaymentaging/getpaymentaging.component';
import { InquiryComponent } from './Customer Portal/inquiry/inquiry.component';
import { InvoiceComponent } from './Customer Portal/invoice/invoice.component';
import { LoginComponent } from './Customer Portal/login/login.component';
import { MasterdataComponent } from './Customer Portal/masterdata/masterdata.component';
import { OverallsalesComponent } from './Customer Portal/overallsales/overallsales.component';
import { SalesorderdataComponent } from './Customer Portal/salesorderdata/salesorderdata.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'customerdetail',component:CustomerdetailComponent},
  {path:'customeredit',component:CustomereditComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'salesorder',component:SalesorderdataComponent},
  {path:'delivery',component:DeliverygetComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'getpayment',component:GetpaymentagingComponent},
  {path:'creditdebit',component:CreditdebitComponent},
  {path:'overallsales',component:OverallsalesComponent},
  {path:'masterdata',component:MasterdataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
