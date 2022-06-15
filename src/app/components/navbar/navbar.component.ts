import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public globalsService: GlobalsService
  ) { }

  ngOnInit() { }

  goToPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
