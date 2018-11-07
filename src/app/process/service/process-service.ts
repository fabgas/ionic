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
    let p1 = new Process("INBOUND","Inbound","Palette","",100);
    let p2 = new Process("OUTBOUND","Outbound","Colis","",857);
    let p3 = new Process("INBOUND","Inbound","Palette","",100);
    let p4 = new Process("OUTBOUND","Outbound","Colis","",857);
    let p5 = new Process("INBOUND","Inbound","Palette","",100);
    let p6 = new Process("OUTBOUND","Outbound","Colis","",857);
    let p7 = new Process("INBOUND","Inbound","Palette","",100);
    let p8 = new Process("OUTBOUND","Outbound","Colis","",857);
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

