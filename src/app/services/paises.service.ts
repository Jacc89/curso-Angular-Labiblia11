import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  baseUrl: string;

  constructor(
    private httpclient: HttpClient
  ) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/region/europe';
   }

  getPaises(): Promise<any[]> {
    return this.httpclient.get<any[]>(this.baseUrl).toPromise();

  }
}
