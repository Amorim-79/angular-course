import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, delay, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number;
  fields = 'name,description,version,homepage';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(300),
        distinctUntilChanged(),
        // tap(value => console.log(value)),
        switchMap(value => this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.fields,
          }
        })),
        tap((response: any) => this.total = response.total),
        map((response: any) => response.results),
      );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {  

      const params_ = {
        search: value,
        fields: this.fields,
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', this.fields);

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((response: any) => this.total = response.total),
          map((response: any) => response.results)
        );
    }
  }

}
