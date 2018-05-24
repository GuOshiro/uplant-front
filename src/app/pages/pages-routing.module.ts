import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasedLayoutComponent } from './based-layout/based-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { NotAuthGuard } from '../services/guards/notAuth.guard';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: BasedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  { path: '**', component: DashboardComponent }
];
