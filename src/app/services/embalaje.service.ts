import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Embalaje } from '../interfaces/embalaje.interface';

@Injectable({
  providedIn: 'root'
})
export class EmbalajeService {

  apiEmbalaje = "http://localhost:3000/embalaje/";

  constructor(
    private http: HttpClient
  ) { }

  getEmbalajes(){
    return this.http.get<Embalaje[]>(this.apiEmbalaje);
  }

  getEmbalaje(codigo){
    return this.http.get<Embalaje>(this.apiEmbalaje + codigo);
  }

}
