import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IPc } from 'src/app/shared/interfaces/pc';
import { PcsService } from '../pcs.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})

export class PcListComponent implements OnInit {

  pcsList: IPc[] | null = null
  hasPcs: boolean = false

  constructor(private pcsService: PcsService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.pcsService.loadPcs().subscribe({
      next: (pcs) => {
        console.log(pcs)
        this.pcsList = pcs
        if (this.pcsList.length > 0) {
          this.hasPcs = true
        }
      },
      error: (err) => {
        console.log(err)
        this.authService.errorString = err.name
        this.router.navigate(['/'])
      }
    })
  }
}
