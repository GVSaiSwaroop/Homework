import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any=[];
  selectedProduct={};


  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


  view(product:any)  {
    this.selectedProduct=product;

  }


  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


catch(value:any)
{
  this.selectedProduct={};
  this.products=this.products.filter((data:any)=>data.id!=value);
}




  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


  constructor(private shoppingService:ShoppingService) {
    this.shoppingService.getdetails().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("server down");
      }
    )
   }

  ngOnInit(): void {
  }

}
