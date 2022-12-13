import { ValidatorFn, FormGroup } from '@angular/forms'

export function sameValueGroupValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup
        const ctr1 = group.get(controlName1)
        const ctr2 = group.get(controlName2)
        return ctr1?.value === ctr2?.value ? null : { sameValueGroupValidator: true }
    }
}

//todo maybe remove