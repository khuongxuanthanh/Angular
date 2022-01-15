import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = [
    {productname:"Product One", productprice:"$22.50"},
    {productname:"Product Two", productprice:"$15.00"},
    {productname:"Product Three", productprice:"$190.00"},
    {productname:"Product Four", productprice:"$123.82"},
    {productname:"Product Five", productprice:"123.75"},
  ];
  pro_edit = {productname:"", productprice:""};

  constructor(){}
  ngOnInit(): void{}
  save(){
    this.product.push(this.pro_edit);
  }
}
