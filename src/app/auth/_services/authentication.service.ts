import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from './../../../environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            observe: 'response' as 'response'
          };
          
        return this.http.post<any>(environment.url+'/auth', { username, password },httpOptions)
            .pipe(map((user:HttpResponse<any>) => {
                const keys = user.headers.get('Authorization');
                     console.log(keys);
                // login successful if there's a jwt token in the response
                if (keys) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(keys));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}