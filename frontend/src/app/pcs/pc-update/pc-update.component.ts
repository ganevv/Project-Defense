import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IPc } from 'src/app/shared/interfaces/pc';
import { PcsService } from '../pcs.service';

@Component({
  selector: 'app-pc-update',
  templateUrl: './pc-update.component.html',
  styleUrls: ['./pc-update.component.scss']
})
export class PcUpdateComponent implements OnInit {

  singlePc: IPc | null = null
  URL_PATTERN = /^https?:\/\/.+/i
  id: string = ''

  updateGroup: FormGroup = this.formBuilder.group({
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

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private pcService: PcsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.pcService.loadOnePc(this.id).subscribe({
      next: (pc) => {
        this.singlePc = pc
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  update(): void {
    const { pcName, cpu, motherboard, gpu, ram, storage, powerSupply, box, price, img } = this.updateGroup.value
    const pc = { pcName, cpu, motherboard, gpu, ram, storage, powerSupply, box, price, img }

    this.pcService.updatePc(pc, this.id).subscribe({
      next: (pc) => {
        if (!pc) { return }
        this.router.navigate([`/pc/details/${this.id}`])
      },
      error: (err) => {
        console.log(err)
        this.router.navigate(['/pcs/catalog'])
      }
    })
  }
}