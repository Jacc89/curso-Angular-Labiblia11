import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  arrPaises: any[];

  constructor(
    private paisesService: PaisesService
  ) { }

 async ngOnInit() {
  this.arrPaises = await this.paisesService.getPaises();
 }

}
