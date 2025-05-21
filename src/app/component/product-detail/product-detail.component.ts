import { Component,  OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  producto?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {    
    setTimeout(() => {  
      this._route.params.subscribe(params => {
      //alert(params['productId']);
      this.producto = this.productList.find(product => product.id == params['productId']);
      this.loading = false;
    });
    }
    , 500);
  }
}
