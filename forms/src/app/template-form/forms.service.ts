import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  post(data: any): void {
    this.http.post('', data);
  }

  getCep(cep: any): Observable<any> {
    return this.http.get<Observable<any>>(`https://viacep.com.br/ws/${cep}/json`);
  }
}
