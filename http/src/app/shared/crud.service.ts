import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL) { }

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(3000)
      );
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(
      take(1)
    )
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(
      take(1)
    );
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(
      take(1)
    );
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: any) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(
      take(1),
    );
  }
}
