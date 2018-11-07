import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Process } from '../model/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
 process = [];
  constructor(private http:HttpClient) { 
    let p1 = new Process("INBOUND-1","Inbound-1","Palette","",1000,57,19);
    let p2 = new Process("OUTBOUND-1","Outbound-1","Colis","",857,26,38);
    let p3 = new Process("INBOUND-2","Inbound-2","Palette","",100,10,8);
    let p4 = new Process("OUTBOUND-2","Outbound-2","Colis","",857,25,39);
    let p5 = new Process("INBOUND-3","Inbound-3","Palette","",25000,95,200);
    let p6 = new Process("OUTBOUND-3","Outbound-3","Colis","",3568,35,101);
    let p7 = new Process("INBOUND-4","Inbound-4","Palette","",8999,125,90);
    let p8 = new Process("OUTBOUND-4","Outbound-4","Colis","",560,12,45);
    this.process[0]= p1;
    this.process[1]= p2;
    this.process[2]= p3;
    this.process[3]= p4;
    this.process[4]= p5;
    this.process[5]= p6;
    this.process[6]= p7;
    this.process[7]= p8;
     
  }

  getProcess():Observable<Process[]>{
    console.log(this.process);
    return of(this.process);
  }
 
}

