import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static passwordsMustMatch(control: AbstractControl) {
        const newPassword = control.get('password');
        const confirmPassword = control.get('confirm');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsMustMatch: true };
        }
        return null;
    }
}
