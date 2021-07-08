import { Component, OnInit } from '@angular/core';
import { RickymotryService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-rickymorty',
  templateUrl: './rickymorty.component.html',
  styleUrls: ['./rickymorty.component.css']
})
export class RickymortyComponent implements OnInit {

  arrPersonajes: any[];
  currentPage: number;
  numPages: number;

  constructor( private rickymortyService: RickymotryService
    ) {
      this.currentPage = 1;
    }

  ngOnInit() {
    this.rickymorty();
  }

  rickymorty() {
    this.rickymortyService.getAll(this.arrPersonajes)
    .then((responde) => {
      this.arrPersonajes = responde.results;
      console.log(responde);
      this.numPages = responde.info.pages;

    }).catch((err) => {
      console.log(err);
    });

  }

  async changePage(siguiente) {
     if (siguiente) {
       this.currentPage++;
     } else {
       this.currentPage--;
     }
     const responde = await this.rickymortyService.getAll(this.currentPage);
     this.arrPersonajes = responde.results;

   }

}
