import { Injectable } from '@angular/core';
import { AuthService } from './guards/auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AbstractService {

  options;
  domain = this.authService.domain + 'api-auth/';

  constructor(
    protected authService: AuthService,
    protected http: Http
  ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }


  get(url) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + url, this.options).map(res => res.json());
  }

  post(data: Object, url: String) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain +  url, data, this.options).map(res => res.json());
  }

  put(data: Object, url: String) {
    this.createAuthenticationHeaders();
    return this.http.put(this.domain +  url, data, this.options).map(res => res.json());
  }

  delete(id: String, url: String) {
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + url + id, this.options).map(res => res.json());
  }


}
