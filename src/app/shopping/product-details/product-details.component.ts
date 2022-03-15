import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()product:any={};

  @Output() e:EventEmitter<any>=new EventEmitter();
  delete(id:any)
  {
    this.e.emit(this.product.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
