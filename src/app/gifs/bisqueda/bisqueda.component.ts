import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-bisqueda',
  templateUrl: './bisqueda.component.html',
  styleUrls: ['./bisqueda.component.css']
})
export class BisquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService){

  }
  buscar(){
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length===0) return;
    else{
      this.gifService.buscarGifs(valor)
      this.txtBuscar.nativeElement.value = '';

    }
   
  }

}
