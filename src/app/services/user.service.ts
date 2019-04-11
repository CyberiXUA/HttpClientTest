import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user.mode';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers(user?: string): Observable<any> {
    if (!!user) {
      return this.httpClient
        .get<IUser>(`https://api.github.com/users/${user}`, {
          headers: this.getDefaultHeaders()
        })
        .pipe(
          map((response) => [response])
        );
    } else {
      return this.httpClient
        .get('https://api.github.com/users', {
          headers: this.getDefaultHeaders(),
          // observe: 'response'
        });
    }
  }

  private getDefaultHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      // 'Authorization': 'Bearer 12345'
    });

    // headers.set('Authorization', 'Bearer 54321');

    // headers = headers.append('XCustom', '54321');

    return headers;
  }
}
