import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { CustomValidators } from 'src/app/common/validators/custom.validators';
import { GlobalsService } from 'src/app/services/globals/globals.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {

  // Login
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    public globalsService: GlobalsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(this.globalsService.EMAIL_REGEX)]),
      password: new FormControl(null, [Validators.required])
    });

    this.registerForm = this.formBuilder.group({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required, Validators.pattern(this.globalsService.PHONE_ONLY_REGEX)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.globalsService.EMAIL_REGEX)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      confirm: new FormControl(null, [Validators.required]),
      telephone: new FormControl('+123456789', [Validators.required, Validators.pattern(this.globalsService.PHONE_REGEX)]),
    }, {
      validators: CustomValidators.passwordsMustMatch
    });
  }

  toggleFlip(reset = false, formToReset?: FormGroup) {
    if (reset == true) {
      formToReset.reset();
    }
    document.querySelector('.flip-container').classList.toggle('flip');
  }

  changePassType(input: IonInput) {
    input.type = (input.type === 'text') ? 'password' : 'text';
  }
}
