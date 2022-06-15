import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { TranslateModule } from '@ngx-translate/core';
import { MainNavComponentModule } from 'src/app/components/main-nav/main-nav.module';
import { NavbarComponentModule } from 'src/app/components/navbar/navbar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { LazyImageComponentModule } from 'src/app/components/lazy-image/lazy-image.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    TranslateModule.forChild(),
    MainNavComponentModule,
    NavbarComponentModule,
    PipesModule,
    LazyImageComponentModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule { }
