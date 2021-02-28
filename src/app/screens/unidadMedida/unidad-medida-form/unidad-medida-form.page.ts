import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida.interface';
import { UnidadMedidaService } from 'src/app/services/unidad-medida.service';

@Component({
  selector: 'app-unidad-medida-form',
  templateUrl: './unidad-medida-form.page.html',
  styleUrls: ['./unidad-medida-form.page.scss'],
})
export class UnidadMedidaFormPage implements OnInit {

  title: string;
  isModoEdicion = false;
  unidadMedida: UnidadMedida = {
    codigo: 0,
    unidad: '',
    simbolo: '',
  };

  constructor(
    private unidadMedidaService: UnidadMedidaService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      const codigo = paramMap.get('codigo');

      if (codigo) {
        this.isModoEdicion = true;
        this.title = "Editar Unidad De Medida";
        this.unidadMedidaService.getUnidadMedida(codigo)
          .subscribe(
            (res) => {
              this.unidadMedida = res;
            },
            (err) => {
              console.error(err)
            }
          )
      } else {
        this.title = "Crear Unidad de Medida";
      }
    })
  }

  addUnidadMedida(unidad: string, simbolo: string) {
    this.unidadMedidaService.addUnidadMedida(unidad, simbolo)
      .subscribe(
        (res) => {
          this.returnToList();
        },
        (err) => {
          console.error("Error al añandir unidad " + err)
        }
      )
  }

  updateUnidadMedida() {
    console.log(this.unidadMedida);
    this.unidadMedidaService.updateUnidadMedida(this.unidadMedida.codigo, this.unidadMedida)
    .subscribe(
      (res) => {
        this.returnToList();
      },
      (err) => {
        console.error("Error al añandir unidad " + err)
      }
    );
  }

  returnToList() {
    this.router.navigate(["/unidad-medida"]);
  }

}
