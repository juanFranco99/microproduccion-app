import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida.interface';
import { UnidadMedidaService } from 'src/app/services/unidad-medida.service';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.page.html',
  styleUrls: ['./unidad-medida.page.scss'],
})
export class UnidadMedidaPage implements OnInit {

  unidades: UnidadMedida[] = [];

  constructor(
    private unidadMedidaService : UnidadMedidaService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute,
    private alertControler : AlertController
  ) { }

  ngOnInit() {
    this.getUnidades();
  }

  ionViewWillEnter(){
    this.getUnidades();
  }

  getUnidades(){
    this.unidadMedidaService.getUnidadMedidas().subscribe(
      (res) => {
        this.unidades = res;
      },
      (err) => {
        console.log(err)
      }
    )
  }

  async msgDelete(codigo){
    const msgDelete = await this.alertControler.create({
      header: "Eliminar",
      message: "Seguro que desea eliminar?",
      buttons: [{
        text: 'Eliminar',
        handler: () => {
          this.deleteUnidadMedida(codigo);
        }
      }, 'Cancelar']
    });
  
    await msgDelete.present();

  }

  async deleteUnidadMedida(codigo){
    await this.unidadMedidaService.deleteUnidadMedida(codigo)
    .subscribe(
      (res) => {
        this.getUnidades();
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
