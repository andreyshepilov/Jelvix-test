import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected API_URL: string;

  constructor(protected http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  public get(path: string, params?: HttpParams) {
    return this.http.get(this.API_URL + path, {params: params});
  }

  public post(path: string, data: any) {
    return this.http.post(this.API_URL + path, data);
  }

}
