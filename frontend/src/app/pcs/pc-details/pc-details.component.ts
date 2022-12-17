import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IPc } from 'src/app/shared/interfaces/pc';
import { PcsService } from '../pcs.service';

@Component({
  selector: 'app-pc-details',
  templateUrl: './pc-details.component.html',
  styleUrls: ['./pc-details.component.scss']
})
export class PcDetailsComponent {

  singlePc: IPc | null = null
  isOwner: Boolean = false
  errors: string | undefined = undefined
  hasUser: Boolean = false
  isAddedToCart: Boolean = false
  hasPc: Boolean = false

  constructor(private pcsService: PcsService, private authService: AuthService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id']
    this.pcsService.loadOnePc(id).subscribe({
      next: (pc) => {
        this.hasPc = true
        this.singlePc = pc
        if (this.singlePc._ownerId._id === this.authService?.user?._id) {
          this.isOwner = true
        }
        this.isAddedToCart = this.singlePc.addToCart.some((userId) => userId == this.authService.user?._id)
      },
      error: (err) => {
        this.hasPc = false
        this.authService.errorString = err.message
      }
    })
  }

  deletePc(): void {
    const id = this.singlePc?._id

    this.pcsService.deletePc(id!).subscribe({
      next: () => {
        this.router.navigate(['pcs/catalog'])
        //todo maybe change route
      },
      error: (err) => {
        console.log(err.error)
        this.errors = err.error
      }
    })
  }

  addPcToCart(): void {
    const id = this.singlePc?._id

    this.pcsService.addPcToCart(id!).subscribe({
      next: () => {
        this.router.navigate(['/auth/profile'])
      },
      error: (err) => {
        console.log(err.error)
        this.errors = err.error
      }
    })
  }
}