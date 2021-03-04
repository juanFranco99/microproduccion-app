import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Embalaje } from 'src/app/interfaces/embalaje.interface';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida.interface';
import { EmbalajeService } from 'src/app/services/embalaje.service';
import { UnidadMedidaService } from 'src/app/services/unidad-medida.service';

@Component({
  selector: 'app-embalaje-form',
  templateUrl: './embalaje-form.page.html',
  styleUrls: ['./embalaje-form.page.scss'],
})
export class EmbalajeFormPage implements OnInit {

  title: string;

  isModoEdicion = false;

  embalaje: Embalaje = {

    codigo : 0,

    embalaje: '',
    
    unidadMedida : null

  }

  unidades: UnidadMedida[] = [];

  constructor(
    private embalajeService: EmbalajeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private unidadMedidaService: UnidadMedidaService
  ) { }

  ngOnInit() {
    this.onInicializar();
  }

  onInicializar(){
    this.cargarDatos();
    this.getUnidadMedidas();
  }

  getUnidadMedidas(){
    this.unidadMedidaService.getUnidadMedidas().subscribe(
      (res) => {
        this.unidades = res;
      },
      (err) => {
        console.log(err)
      }
    )
  }

  cargarDatos(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const codigo = paramMap.get('codigo');

      if(codigo){
        this.isModoEdicion = true;
        this.title = "Editar Embalaje";
        this.embalajeService.getEmbalaje(codigo)
        .subscribe(
          (res) => {
            this.embalaje = res;
            console.log(this.embalaje);
          },
          (err) => {
            console.error(err);
          }
        )
      }else{
        this.title = "Crear Embalaje";
        console.log("Crear embalaje");
      }
    })
  }

  addEmbalaje(){

  }

  returnToList() {
    this.router.navigate(["/embalaje-list"]);
  }

}
