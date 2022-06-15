import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  pageContent = '';

  constructor(
    public globalsService: GlobalsService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.pageContent = this.translateService.instant('about_us_content');
  }

}
