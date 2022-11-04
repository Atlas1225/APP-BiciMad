import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsedis } from './interfaces/Responsedis';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient:HttpClient) { }

  query(query: string) {
    let headers= new HttpHeaders()
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return this.httpClient.get<Responsedis>('/api/sparql?'+query, {headers, responseType: 'json'})
  }
}
