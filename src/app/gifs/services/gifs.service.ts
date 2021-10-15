import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gits.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[]=[];
  private _apiKey:string = 'lSWHNyIOWHPBoFdOdZvGDDXx4IrXUl3d';
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || []
    //otra forma
    // if(localStorage.getItem('historial')){
    //   this._historial =JSON.parse(localStorage.getItem('historial')!)
    // }
  }

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0,8);
    localStorage.setItem('historial', JSON.stringify(this._historial))
    console.log(this._historial)

    // const giphs = await fetch('https://api.giphy.com/v1/gifs/search?api_key=lSWHNyIOWHPBoFdOdZvGDDXx4IrXUl3d&q=hello&limit=10')
    // const data = await giphs.json();
    // console.log(data)

    const params = new HttpParams().set('api_key', this._apiKey).set('limit', '9').set('q', query);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((res)=>{
        this.resultados=res.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })
  }

  

}
