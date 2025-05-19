import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  producto: string = '';
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {    
    this._route.params.subscribe(params => {
      alert(params['productId']);
      this.producto = params['productId'];
      this.color = params['category'];
  });
 }

}
