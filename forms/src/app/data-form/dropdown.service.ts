import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateDataModel } from './state-data.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getBrazilStates(): Observable<StateDataModel[]> {
    return this.http.get<StateDataModel[]>('assets/data/brstates.json');
  }
}
