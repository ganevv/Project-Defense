import { Component, OnInit } from '@angular/core';
import { IPc } from 'src/app/shared/interfaces/pc';
import { PcsService } from '../pcs.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})

export class PcListComponent implements OnInit {

  pcsList: IPc[] | null = []
  hasPcs: boolean = false

  constructor(private pcsService: PcsService) { }


  ngOnInit(): void {
    this.pcsService.loadPcs().subscribe({
      next: (pcs) => {
        this.pcsList = pcs
        if (this.pcsList.length > 0) {
          this.hasPcs = true
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
