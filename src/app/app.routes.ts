import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:category/:productId', component: ProductDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
