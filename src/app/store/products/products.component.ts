import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product=[
    {'id':1,'image':'../../assets/1.png','desc':'Magnificent Wooden Elephant Footstool',price:' 1 ETH'},
    {'id':2,'image':'../../assets/2.png','desc':'Majestic, The Painted Horse Sculpture (Blue)',price:'  1.3 ETH'},
    {'id':3,'image':'../../assets/3.png','desc':'Ethnic & Vibrant Rajasthani Photo Frame',price:'1.34 ETH'},
    {'id':4,'image':'../../assets/4.png','desc':'Golden Masterpiece Frame - Unique Design',price:'   1.1 ETH'},
    {'id':5,'image':'../../assets/5.png','desc':'Exquisite Dual-tone Wooden Vanity Box',price:'1 ETH'},
    {'id':6,'image':'../../assets/6.png','desc':'Hand-painted Wooden Wine Bottle Holder',price:'1 ETH'},
    {'id':7,'image':'../../assets/7.png','desc':'Hand-painted Wooden Wine Bottle Holder',price:'2 ETH'}
  ]


}
