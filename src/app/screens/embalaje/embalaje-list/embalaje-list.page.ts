import { Component, OnInit } from '@angular/core';
import { Embalaje } from 'src/app/interfaces/embalaje.interface';
import { EmbalajeService } from 'src/app/services/embalaje.service';

@Component({
  selector: 'app-embalaje-list',
  templateUrl: './embalaje-list.page.html',
  styleUrls: ['./embalaje-list.page.scss'],
})
export class EmbalajeListPage implements OnInit {

  embalajes: Embalaje[]  = [];

  constructor(
    private embalajeService: EmbalajeService
  ) { }

  ngOnInit() {
    this.getEmbalajes();
  }

  getEmbalajes(){
    this.embalajeService.getEmbalajes()
    .subscribe(
      (res) => {
        this.embalajes = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    )
  }

}
