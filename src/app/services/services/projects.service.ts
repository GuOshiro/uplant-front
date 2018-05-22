import { Injectable } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AbstractService } from '../abstract.service'

@Injectable()
export class ProjectsService extends AbstractService {

  constructor(
    protected authService: AuthService,
    protected http: Http,
    protected abstractService: AbstractService
  ) {
    super(authService, http)
  }


}
