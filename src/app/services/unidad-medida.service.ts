import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UnidadMedida } from '../interfaces/unidad-medida.interface';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  apiUnidadMEdida = "http://localhost:3000/unidadMedida/";

  constructor(
    private http: HttpClient
  ) { }

  getUnidadMedidas(){
    return this.http.get<UnidadMedida[]>(this.apiUnidadMEdida);
  }

  getUnidadMedida(codigo){
    return this.http.get<UnidadMedida>(this.apiUnidadMEdida + codigo);
  }

  addUnidadMedida(unidad: string, simbolo: string){
    return this.http.post<UnidadMedida[]>(this.apiUnidadMEdida, {
      unidad,
      simbolo
    });
  }

  updateUnidadMedida(codigo: number, unidadMedida: UnidadMedida){
    return this.http.put(this.apiUnidadMEdida + codigo, unidadMedida);
  }

  deleteUnidadMedida(codigo){
    return this.http.delete(this.apiUnidadMEdida + codigo);
  }
}
