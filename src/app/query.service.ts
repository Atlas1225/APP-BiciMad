import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient:HttpClient) { }

  query() {
    let headers= new HttpHeaders()
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return this.httpClient.get<string>('http://localhost:8000/sparql?query=SELECT ?s ?p ?o WHERE { ?s ?p ?o }', {headers})
  }
}
