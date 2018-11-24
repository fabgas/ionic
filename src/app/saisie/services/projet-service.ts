import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Projet } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
 projets = [];
  constructor(private http:HttpClient) { 
    let p1 = new Projet("KNFR124801","Nantes Nord");
    let p2 = new Projet("KNFR124802","Nantes Ouest");
    this.projets[0]= p1;
    this.projets[1]= p2;
     
  }

  getProjets():Observable<Projet[]>{
    console.log(this.projets);
    return of(this.projets);
  }
  getProjet(ucProjet:string):Projet {
      return this.projets.find(projet=> projet.ucProjet === ucProjet);
  }
}


