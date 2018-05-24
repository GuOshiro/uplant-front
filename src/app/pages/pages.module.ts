import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BasedLayoutComponent } from './based-layout/based-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    BasedLayoutComponent
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    BasedLayoutComponent
  ]
})
export class PagesModule { }
