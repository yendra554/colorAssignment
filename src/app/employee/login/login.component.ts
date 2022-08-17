import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private loginSevice: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      user_id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.http.get<any>('https://retoolapi.dev/B13laa/getusers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.user_id === this.form.value.user_id &&
            a.password === this.form.value.password
          );
        });
        if (user) {
          alert('Login Success');
          this.form.reset();
          this.router.navigate(['employee-list']);
        } else {
          alert('Login Failed!');
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
