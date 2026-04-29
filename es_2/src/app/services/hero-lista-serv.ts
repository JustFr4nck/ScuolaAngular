import { Injectable } from "@angular/core";
import { Hero } from "../models/hero.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeroListaServ {

  private apiUrl = "https://crudcrud.com/api/80fb0bc4b77f4262ad75876ed7b6d52f/edit";

  constructor(private http: HttpClient) { }


  getLista(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  /*
    get(id: number): Observable<Hero> {
      return this.http.get<Hero>(this.apiUrl + `/${id}`);
    }
  */

  addMission(hero: Hero): Observable<Hero> {

    return this.http.post<Hero>(this.apiUrl, hero);
  }

  updateHero(id: number | string, hero: Hero): Observable<void>{

    const {id: _, ... heroData} = hero as Hero;
    return this.http.put<void>(`${this.apiUrl}/${id}`, heroData);

  }
}
