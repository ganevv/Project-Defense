import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value

    if (!/^[a-zA-Z0-9]{3,}@[a-z]+\.[a-z]+$/.test(value)) {
        return {
            email: true
        }
    }
    return null
}