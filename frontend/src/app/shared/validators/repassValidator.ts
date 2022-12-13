import { AbstractControl } from "@angular/forms";

export function passwordMissMatch(passwordFromControl: AbstractControl) {
    return (rePasswordFromControl: AbstractControl) => {
        if (passwordFromControl.value !== rePasswordFromControl.value) {
            return {
                passwordMatch: true
            }
        }
        return null
    }
}