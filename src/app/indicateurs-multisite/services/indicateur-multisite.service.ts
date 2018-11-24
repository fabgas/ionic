import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IndicateurMultisite} from '../model/indicateur-multisite';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';


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
export class IndicateurMultisiteService {
 
  constructor(private http: HttpClient) {
 }

  /**
   * Retrouve les indicateurs multisite pour une date donnée
   **/  
  getIndicateurMultisite(projets:string[],date:any):Observable<IndicateurMultisite[]>{
   
   return this.http.get<IndicateurMultisite[]>("/assets/datas/indicateurs.json")
   .pipe(
     tap(res => console.log(res) ),
     tap(res => console.log(projets) ),
     map(res =>  _.filter(res,ind => {return projets.findIndex(proj=> ind.ucProjet===proj)>-1})));
    ;
  }

  /**
   * Retrouve les indicateurs multisite pour un intervalle de date
   **/  
  getIndicateurMultisiteDates(projets:string[],dateDebut:any,dateFin:any):Observable<IndicateurMultisite[]>{
   
    return this.http.get<IndicateurMultisite[]>("/assets/datas/indicateurs.json")
    .pipe(
      tap(res => console.log(res) ),
      tap(res => console.log(projets) ),
      map(res =>  _.filter(res,ind => {return projets.findIndex(proj=> ind.ucProjet===proj)>-1})));
     ;
   }
 
}
