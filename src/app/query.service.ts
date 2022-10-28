import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient:HttpClient) { }

  query() {
    return this.httpClient.get<string>('http://localhost:8000/sparql?query=SELECT ?s ?p ?o WHERE { ?s ?p ?o }')
  }
}
