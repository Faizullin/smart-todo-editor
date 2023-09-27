import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../models/user';
import { ErrorModalService } from './error-modal.service';

const LOCALSTORAGE_FIELDS = {
  user: 'user',
  access_token: "access_token",
  refresh_token: "refresh_token",
}







@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private errorModalService: ErrorModalService
  ) {
    this.userSubject = new BehaviorSubject(this.getUserFromLocalStorage());
    this.user = this.userSubject.asObservable();
    this.errorModalService = errorModalService;
  }

  public get userValue() {
    return this.userSubject.value;
  }
  getUserFromLocalStorage(): User | null {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_FIELDS.user)!)
  }

  login(data: ILoginForm) {
    return this.http.post<any>(`/api/token/`, { ...data })
      .pipe(map(data => {
        localStorage.setItem(LOCALSTORAGE_FIELDS.refresh_token, data.refresh);
        localStorage.setItem(LOCALSTORAGE_FIELDS.access_token, data.access);
        return data
      }), catchError((error: HttpErrorResponse) => {
        return throwError(this.processError(error));
      })
      );
  }
  getUserData() {
    return this.http.get<User>(`/api/user/`)
      .pipe(map(data => {
        localStorage.setItem(LOCALSTORAGE_FIELDS.user, JSON.stringify(data));
        this.userSubject.next(data);
        return data;
      }));
  }
  refreshToken(refreshToken: string) {
    return this.http.post<any>(`/api/token/refresh/`, { refresh: refreshToken })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(LOCALSTORAGE_FIELDS.user, JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  register(data: IRegisterForm) {
    return this.http.post<any>(`/api/register/`, { ...data })
      .pipe(map(user => {
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    const keys_to_remove = [LOCALSTORAGE_FIELDS.user, LOCALSTORAGE_FIELDS.access_token, LOCALSTORAGE_FIELDS.refresh_token]
    keys_to_remove.forEach(key => {
      localStorage.removeItem(key)
    });
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  processError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.errorModalService.openErrorModal(error.status, 'Authentication Error: You are not authorized.');
    } else if (error.status === 403) {
      this.errorModalService.openErrorModal(error.status, 'Forbidden Error: Access Denied.');
    } else if (error.status === 500) {
      this.errorModalService.openErrorModal(error.status, 'Server Error: Something went wrong.');
    } else {
      this.errorModalService.openErrorModal(null, 'Unknown Error: Something went wrong.');
    }
    return error;
  }
}

export interface IRegisterForm {
  username: string,
  email: string,
  password: string,
  password_confirmation: string,
}
export interface ILoginForm {
  email: string,
  password: string,
}
