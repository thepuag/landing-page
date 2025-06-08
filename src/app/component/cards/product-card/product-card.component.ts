import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../../models/product.model';
import { TEXTS } from '../../../resources/texts';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',})
export class ProductCardComponent {
  @Input() product!: IProduct;
  TEXTS = TEXTS;
}
