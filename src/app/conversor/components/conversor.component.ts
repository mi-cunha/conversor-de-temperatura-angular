import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConversorService, MedidaService } from '../services';
import { Medida, Conversao, ConversaoResponse } from '../models';
import { NumeroDirective } from '../directives';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  conversaoResponse:ConversaoResponse;
  medidas: Medida[];
  conversao: Conversao;
  possuiErro:boolean;

  
  @ViewChild("conversaoForm", {static:true}) conversaoForm:NgForm;
  
  constructor(
    private medidaService: MedidaService,
    private conversorService:ConversorService
  ) { }

  ngOnInit(): void {
    this.medidas = this.medidaService.listarTodas();
    this.init();
  }
  init():void{
    this.conversao = new Conversao('°C', '°F', null);
    this.possuiErro = false
  }

  converter():void{
    if (this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao).subscribe(
        response => this.conversaoResponse = response,
        error => this.possuiErro = true
      )
    }
  }

  }


