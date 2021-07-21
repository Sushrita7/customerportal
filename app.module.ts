import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import { Ng2OrderModule } from'ng2-order-pipe';
import { NgxPaginationModule } from'ngx-pagination';
import { DataTablesModule } from'angular-datatables';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Customer Portal/login/login.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { CreditdebitComponent } from './Customer Portal/creditdebit/creditdebit.component';
import { CustomerdetailComponent } from './Customer Portal/customerdetail/customerdetail.component';
import { CustomereditComponent } from './Customer Portal/customeredit/customeredit.component';
import { DeliverygetComponent } from './Customer Portal/deliveryget/deliveryget.component';

import { GetpaymentagingComponent } from './Customer Portal/getpaymentaging/getpaymentaging.component';
import { InquiryComponent } from './Customer Portal/inquiry/inquiry.component';
import { MasterdataComponent } from './Customer Portal/masterdata/masterdata.component';
import { SalesorderdataComponent } from './Customer Portal/salesorderdata/salesorderdata.component';
import { InvoiceComponent } from './Customer Portal/invoice/invoice.component';
import { OverallsalesComponent } from './Customer Portal/overallsales/overallsales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreditdebitComponent,
    CustomerdetailComponent,
    CustomereditComponent,
    DeliverygetComponent,
    
    GetpaymentagingComponent,
    InquiryComponent,
    MasterdataComponent,
    SalesorderdataComponent,
    InvoiceComponent,
    OverallsalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
