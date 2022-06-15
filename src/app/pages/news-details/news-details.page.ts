import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  news;

  constructor(
    private router: Router,
    public globalsService: GlobalsService
  ) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation()?.extras?.state?.news) {
      this.news = this.router.getCurrentNavigation().extras.state.news;
      console.log('news: ', this.news);
    }
    else {
      this.router.navigateByUrl('news', { replaceUrl: true });
    }
  }

}
