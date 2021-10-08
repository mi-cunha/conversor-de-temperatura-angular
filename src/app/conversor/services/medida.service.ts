import { Injectable } from '@angular/core';
import { Medida } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class MedidaService {
  private medidas: Medida[];

  constructor() { }

  private medidasObj = [
    {"sigla": "°C", "descricao":"Celsius"},
    {"sigla": "°K", "descricao":"Kelvin"},
    {"sigla": "°F", "descricao":"Fahrenheit"}
  ];

  listarTodas(): Medida[]{
    if(this.medidas){
      return this.medidas
    }this.medidas = [];

    for(let medidasObj of this.medidasObj){
      let medida: Medida = new Medida();
      Object.assign(medida, medidasObj);
      this.medidas.push(medida)
    }
    return this.medidas
  }
}
