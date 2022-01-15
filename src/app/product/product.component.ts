import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = [
    {productname:"Product One", productprice:"$22.50"},
    {productname:"ProductTwo", productprice:"$15.00"},
    {productname:"ProductThree", productprice:"$190.00"},
    {productname:"ProductFour", productprice:"$123.82"},
    {productname:"ProductFive", productprice:"123.75"},
  ];
  constructor(){}
  ngOnInit(): void{}
}
