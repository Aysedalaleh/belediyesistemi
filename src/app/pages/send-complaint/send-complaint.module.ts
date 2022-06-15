import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendComplaintPageRoutingModule } from './send-complaint-routing.module';

import { SendComplaintPage } from './send-complaint.page';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MainNavComponentModule } from 'src/app/components/main-nav/main-nav.module';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendComplaintPageRoutingModule,
    TranslateModule.forChild(),
    PipesModule,
    MainNavComponentModule,
    NavbarComponentModule
  ],
  declarations: [SendComplaintPage]
})
export class SendComplaintPageModule { }
