import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './guards/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AbstractService } from './abstract.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    AbstractService
  ],
  declarations: []
})
export class ServicesModule { }
