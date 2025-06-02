import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { productsList } from './products.mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList = productsList;

}
