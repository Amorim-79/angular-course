import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateDataModel } from './state-data.model';
import { CityDataModel } from './city-data.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getBrazilStates(): Observable<StateDataModel[]> {
    return this.http.get<StateDataModel[]>('assets/data/brstates.json');
  }
  getCities(idState: number): Observable<CityDataModel[]> {
    return this.http.get<CityDataModel[]>('assets/data/cities.json')
      .pipe(
        map((cities: CityDataModel[]) => cities.filter(city => city.estado === idState))
      );
  }

  getPositions(): any[] {
    return [
      { name: 'Dev', level: 'Junior', description: 'Dev Jr' },
      { name: 'Dev', level: 'Pleno', description: 'Dev Pl' },
      { name: 'Dev', level: 'Senior', description: 'Dev Sr' },
    ];
  }

  getTechnologies(): any[] {
    return [
      { name: 'java', description: 'Java' },
      { name: 'javascript', description: 'Javascript' },
      { name: 'php', description: 'PHP' },
      { name: 'rubi', description: 'Rubi' },
    ];
  }

  getNewsletter(): any[] {
    return [
      { value: 'S', description: 'Sim' },
      { value: 'N', description: 'Não' },
    ];
  }
}
