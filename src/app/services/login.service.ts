import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'https://retoolapi.dev/B13laa/getusers';

  constructor(private http: HttpClient, private router: Router) {}
  users() {
    return this.http.get(this.url);
  }
  login(data: any) {
    this.http
      .post<{
        error: number;
        error_msg: string;
        expireIn: number;
        token: string;
        user_id: string;
      }>(`${this.url}`, data)
      .subscribe((response) => {
        const token = response.token;
        if (token) {
          this.router.navigate(['login/employee-list/']);
        }
      });
  }
}
