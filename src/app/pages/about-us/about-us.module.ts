import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';
import { TranslateModule } from '@ngx-translate/core';
import { MainNavComponentModule } from 'src/app/components/main-nav/main-nav.module';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule,
    TranslateModule.forChild(),
    MainNavComponentModule,
    NavbarComponentModule,
    PipesModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule { }
