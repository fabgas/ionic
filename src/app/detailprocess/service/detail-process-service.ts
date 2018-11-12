import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { DetailProces,OperatorDetailProcess } from '../model/detail-process';
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
export class DetailProcessService {
  process = [];
  datas : OperatorDetailProcess[][][]
  constructor(private http: HttpClient) {
    let p1 = new DetailProces("INBOUND-1", "Inbound-1", "Palette", "", 1000, 57, 19);
    let p2 = new DetailProces("OUTBOUND-1", "Outbound-1", "Colis", "", 857, 26, 38);
    let p3 = new DetailProces("INBOUND-2", "Inbound-2", "Palette", "", 100, 10, 8);
    let p4 = new DetailProces("OUTBOUND-2", "Outbound-2", "Colis", "", 857, 25, 39);
    let p5 = new DetailProces("INBOUND-3", "Inbound-3", "Palette", "", 25000, 95, 200);
    let p6 = new DetailProces("OUTBOUND-3", "Outbound-3", "Colis", "", 3568, 35, 101);
    let p7 = new DetailProces("INBOUND-4", "Inbound-4", "Palette", "", 8999, 125, 90);
    let p8 = new DetailProces("OUTBOUND-4", "Outbound-4", "Colis", "", 560, 12, 45);
    this.process[0] = p1;
    this.process[1] = p2;
    this.process[2] = p3;
    this.process[3] = p4;
    this.process[4] = p5;
    this.process[5] = p6;
    this.process[6] = p7;
    this.process[7] = p8;
    this.datas=[];
   
    

  }

  getDetailProcess(ucProcessus: string): Observable<DetailProces> {
    let result = this.process.find(pro => pro.ucProcessus === ucProcessus);
    return of(result);
  }
  getProcessDetail(ucProjet:string,ucProcessus:string,date:any):Observable<OperatorDetailProcess[]>{
    if (!this.datas[ucProjet]) {
      this.datas[ucProjet] = [];
    }
    if (this.datas[ucProjet][date]) {
     let  details = _.filter(this.datas[ucProjet][date], detailOperateur => detailOperateur.ucProcessus === ucProcessus);
      return of(details);
    }
   return this.http.get<OperatorDetailProcess[]>("/assets/datas/date_1.json")
   .pipe(
     tap(res => console.log(res) ),
     tap(res => _.forEach(res,ope=>{ if (ope.heures && ope.heures>0)ope.prod = ope.volume/ope.heures;})),
    tap(res => this.datas[ucProjet][date] = res),
    map(res =>  _.filter(res,{'ucProcessus':ucProcessus})))
    ;

  }
//   .subscribe(res => { this.datas[ucProjet][date] = res;
   
//    let  details = _.filter(this.datas[ucProjet][date],{'ucProcessus':ucProcessus});
//     return of(details);});
//  }
}

