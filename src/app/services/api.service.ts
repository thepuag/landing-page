import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl: string;
  
  constructor(
    private _httpClient: HttpClient,
    private _configService: ConfigService
  ) { 
    this.baseUrl = this._configService.getApiBaseUrl();
  }  

  public getAllProducts() : Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseUrl + 'api/Productos');
  }

  public getProductsById(id: number) : Observable<IProduct> {
    return this._httpClient.get<IProduct>(this.baseUrl + 'api/Productos/' + id);
  }

  public createProduct(product: IProduct) : Observable<IProduct> {
    return this._httpClient.post<IProduct>(this.baseUrl + 'api/Productos', product);
  }

}
