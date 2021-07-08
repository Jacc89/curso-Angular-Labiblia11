import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string ;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(
    private httpClient: HttpClient
    ) {
      this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }


    getAll(): Promise<any[]> {
      return this.httpClient.get<any[]>(this.baseUrl).toPromise();
    }

    getById(pId: number): Promise<any[]> {
      return this.httpClient.get<any[]>(`${this.baseUrl}/${pId}`).toPromise();
    }

    create({title, body, userId}): Promise<any> {
      const bodyRequest = {title, body, userId };

      return this.httpClient.post<any>(this.baseUrl, bodyRequest, this.httpOptions).toPromise();
    }

    update({id, title, body, userId}): Promise<any[]> {
      return this.httpClient.put<any[]>(`${this.baseUrl}/${id}`, {id, title, body, userId}).toPromise();
    }
    delete(pId): Promise<any[]> {
      return this.httpClient.delete<any[]>(`${this.baseUrl}/${pId}`).toPromise();
    }
}
