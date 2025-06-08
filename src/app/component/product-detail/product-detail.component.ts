import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto?: IProduct;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const productId = Number(params['productId']);
      
      if (productId) {
        this.loadProduct(productId);
      } else {
        this.error = 'ID de producto inválido';
        this.loading = false;
      }
    });
  }

  private loadProduct(id: number): void {
    this.loading = true;
    this.error = null;

    this._apiService.getProductsById(id).subscribe({
      next: (product) => {
        this.producto = product;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar el producto:', error);
        this.error = 'No se pudo cargar la información del producto';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this._router.navigate(['/products']);
  }
}