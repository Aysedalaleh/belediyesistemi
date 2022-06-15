import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  public currentPage = '';

  //REGEX
  public EMAIL_REGEX = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';
  public PHONE_REGEX = '^[+]*[\s\./0-9]{3,}$';
  public PHONE_ONLY_REGEX = '^[0-9]{3,}$';

  // USER
  firstName = '';
  lastName = '';
  email = '';
  telephone = '';
  accountRole = 0;
  public isLoggedIn = false;

  constructor() { }

}
