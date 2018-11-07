import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

import { DetailProces } from './model/detail-process';
import { DetailProcessService} from './service/detail-process-service';
@Component({
  selector: 'app-detailprocess',
  templateUrl: './detailprocess.page.html',
  styleUrls: ['./detailprocess.page.scss'],
})
export class DetailprocessPage implements OnInit {
  
  detailProcessus : DetailProces;

  constructor(private route: ActivatedRoute, private processDetailService: DetailProcessService) { }

  ngOnInit() {
   // this.route.params.subscribe( params => this.process = new Projet(params.ucProjet,params.llProjet) );
   this.route.params.subscribe( params => this.processDetailService.getDetailProcess(params.ucProcessus).subscribe(
          result => this.detailProcessus = result
      )
     )
   
  }

}
