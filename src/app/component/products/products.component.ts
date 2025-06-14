import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { ProductCardComponent } from '../cards/product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [RouterModule, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsDB: IProduct[] = [];

  constructor(private _apiServices: ApiService) {}

  ngOnInit(): void {
    this._apiServices.getAllProducts().subscribe((data) => {
      this.productsDB = data;
    });
  }
}
