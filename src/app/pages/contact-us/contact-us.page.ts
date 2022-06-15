import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  form: FormGroup;
  charCount = 0;
  maxCharCount = 500;
  param = {
    maxLength: this.maxCharCount
  };

  constructor(
    public globalsService: GlobalsService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(this.globalsService.firstName, [Validators.required]),
      lastname: new FormControl(this.globalsService.lastName, [Validators.required]),
      email: new FormControl(this.globalsService.email, [Validators.required, Validators.pattern(this.globalsService.EMAIL_REGEX)]),
      telephone: new FormControl(this.globalsService.telephone, [Validators.required, Validators.pattern(this.globalsService.PHONE_REGEX)]),
      userType: new FormControl(this.globalsService.accountRole, [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.maxLength(this.maxCharCount)])
    });
  }

  async send() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    // await this.loadingService.presentLoading();
    // this.fullService.contactUs(this.form.value)
    //   .subscribe(async (response) => {
    //     await this.loadingService.dismiss();
    //     this.toastService.presentToast('your_msg_sent_we_will_contact_you');
    //   }, async (error) => {
    //     await this.loadingService.dismiss();
    //     this.toastService.presentToast(error, 'danger');
    //   });
  }

  clacChars(event) {
    this.charCount = String(event.target.value).length;
  }
}
