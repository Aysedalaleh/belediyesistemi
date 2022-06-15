import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRegisterPageRoutingModule } from './login-register-routing.module';

import { LoginRegisterPage } from './login-register.page';
import { TranslateModule } from '@ngx-translate/core';
import { MainNavComponentModule } from 'src/app/components/main-nav/main-nav.module';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRegisterPageRoutingModule,
    TranslateModule.forChild(),
    MainNavComponentModule,
    NavbarComponentModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [LoginRegisterPage]
})
export class LoginRegisterPageModule { }
