import { Operateur } from '../model/operateur';
import { Responsable } from '../model/responsable';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'lodash';


/**
 * La structure des données renvoyées est la suivantes :
 *  - detail du processus (global) : heure réelles, volumes objet principal, productivité réelle  
 *                                   capacité de prod,volumes planifiés , productivité cible
 *                                      -> Resultats de type T ou P ?
 * - Détail par opérateur et par processus : heures , volumes objets, prod objet principal
 *                                     -> saisie conso réelle.
 */
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
 
  constructor(private http: HttpClient) {
    }

  /**
   * Retrouve les indicateurs multisite pour une date donnée
   **/  
  getResponsables(projets:string):Observable<Responsable[]>{
   
   return this.http.get<Responsable[]>("/assets/datas/responsables.json")
   .pipe(
     tap(res => console.log(res) ),
     tap(res => console.log(projets) ));
    ;
  }
}
