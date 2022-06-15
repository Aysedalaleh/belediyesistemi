import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {

  constructor(
    public globalsService: GlobalsService,
    private router: Router
  ) { }

  ngOnInit() { }

  goToPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
