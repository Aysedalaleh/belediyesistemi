import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LazyImageComponent } from './lazy-image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LazyLoadImageModule
    ],
    declarations: [LazyImageComponent],
    exports: [LazyImageComponent]
})
export class LazyImageComponentModule { }
