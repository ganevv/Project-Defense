import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PcsService } from '../pcs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  errors: string | undefined = undefined
  URL_PATTERN = /^https?:\/\/.+/i

  createGroup: FormGroup = this.formBuilder.group({
    'pcName': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'cpu': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'motherboard': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'gpu': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'ram': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'storage': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'powerSupply': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'box': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'price': new FormControl('', [Validators.required, Validators.min(0.01)]),
    'img': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
  })

  constructor(private router: Router, private formBuilder: FormBuilder, private pcsService: PcsService) { }

  create(): void {
    const { pcName, cpu, motherboard, gpu, ram, storage, powerSupply, box, price, img } = this.createGroup.value
    const pc = { pcName, cpu, motherboard, gpu, ram, storage, powerSupply, box, price, img }

    this.pcsService.createPc(pc).subscribe({
      next: (pc) => {
        if (!pc) { return }
        this.router.navigate(['/pcs/catalog'])
      },
      error: (err) => {
        this.errors = err.error.error
      }
    })
  }
}