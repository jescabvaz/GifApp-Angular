import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private gifService:GifsService, private http: HttpClient) { }

get historial(){
  return this.gifService.historial
}

buscar(item:string){
 this.gifService.buscarGifs(item)
      
}

}
