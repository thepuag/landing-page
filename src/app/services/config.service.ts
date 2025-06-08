import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IAppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configSubject = new BehaviorSubject<IAppConfig | null>(null);
  public config$ = this.configSubject.asObservable();

  constructor(private _httpClient: HttpClient) { }

  public loadConfig(): Promise<IAppConfig> {
    return new Promise((resolve, reject) => {
      this._httpClient.get<IAppConfig>('./assets/app-config/config.json')
        .subscribe({
          next: (config) => {
            this.configSubject.next(config);
            resolve(config);
          },
          error: (error) => {
            console.error('Error loading configuration:', error);
            reject(error);
          }
        });
    });
  }

  public getConfig(): IAppConfig | null {
    return this.configSubject.value;
  }

  public getApiBaseUrl(): string {
    const config = this.getConfig();
    return config ? config.apiBaseUrl : 'http://localhost:5000/';
  }
}