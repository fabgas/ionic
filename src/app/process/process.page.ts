import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Projet } from '../list/model/projet'
import { Process } from './model/process';
import { ProcessService } from './service/process-service';
@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  projet:Projet;
  processus:Process[];
  constructor(private route: ActivatedRoute, private processService:ProcessService) {
   
  }
  ngOnInit() {
    this.route.params.subscribe( params => this.projet = new Projet(params.ucProjet,params.llProjet) );
    this.processService.getProcess().subscribe(
      result => this.processus = result
    );
  }
  
}
