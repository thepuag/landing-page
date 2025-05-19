import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './component/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDetailComponent, ProductsComponent, ContactComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
}
