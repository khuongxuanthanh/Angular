import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductComponent } from './product/product.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const appRoutes: Routes = [
  {path:"",component:ProductComponent},
  {path:"editproduct",component:EditproductComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
