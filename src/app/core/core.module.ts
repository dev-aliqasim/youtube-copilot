import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { User } from './models/user.model';
import { TokenInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[],
  providers:[ThemeService,TokenInterceptor]
})
export class CoreModule { }
