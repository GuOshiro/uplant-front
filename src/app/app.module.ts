import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module'
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    AuthModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
