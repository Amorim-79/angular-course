import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  constructor(private http: HttpClient) { }

  verifyEmail(email: string): Observable<any> {
    return this.http.get('assets/data/verifyEmails.json')
      .pipe(
       delay(3000),
       map((data: {emails: any[]}) => data.emails),
       map((data: {email: string}[]) => data.filter(value => value.email === email)),
       map((data: any[]) => data.length > 0)
      );
  }
}
