import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import * as _ from 'lodash';
import { DetailProces,OperatorDetailProcess } from './model/detail-process';
import { DetailProcessService} from './service/detail-process-service';

@Component({
  selector: 'app-detailprocess',
  templateUrl: './detailprocess.page.html',
  styleUrls: ['./detailprocess.page.scss'],
})
export class DetailprocessPage implements OnInit {
  listeOperateurs: OperatorDetailProcess[];
  detailProcessus : DetailProces;
  detailOperateurProcessus: OperatorDetailProcess[];
  shifts:OperatorDetailProcess[];
  countOperateurs:number;
  constructor(private route: ActivatedRoute,private processDetailService: DetailProcessService) { }

  ngOnInit() {
  this.route.params.subscribe( params => this.processDetailService.getDetailProcess(params.ucProcessus).subscribe(
        result => this.detailProcessus = result
      )
   )
   this.route.params.subscribe( params => this.processDetailService.getProcessDetail(params.ucProjet,params.ucProcessus,params.date).subscribe(
         result => {console.log(result); 
          result=  _.sortBy(result,ope => ope.llOperateur);
                    this.detailOperateurProcessus = result;
                  
                    this.shifts= _.uniqBy(result,ope => ope.ucShift);
                  //  let noShift = new OperatorDetailProcess("","","","",0,0);
                  //  this.shifts.unshift(noShift);
                   // console.log(this.shifts);
                    //this.filtreShift(this.shifts[0].ucShift);
                    this.listeOperateurs = _.cloneDeep(this.detailOperateurProcessus);
                    this.countOperateurs = this.listeOperateurs.length;
                  }
      )
     )
  }
  
  segmentChanged(event) {
    console.log(event);
    let ucShift = event.detail.value;
     this.filtreShift(ucShift);
    
  }
  filtreShift(ucShift:string) {
    this.listeOperateurs = [];
    if (ucShift==='TOUS') {
      this.listeOperateurs = _.cloneDeep(this.detailOperateurProcessus);
      this.countOperateurs = this.listeOperateurs.length;
    }
    else{
      
      this.listeOperateurs = _.filter(this.detailOperateurProcessus, {'ucShift': ucShift});
      this.countOperateurs = this.listeOperateurs.length;
    }
  }

  orderByHeures() {
    console.log("tri par heures");

    this.listeOperateurs = _.sortBy(this.listeOperateurs,ope => ope.heures);
  }
  orderByVolume() {
    this.listeOperateurs = _.sortBy(this.listeOperateurs,ope => ope.volumes);
  }
  orderByProd() {
    this.listeOperateurs = _.sortBy(this.listeOperateurs,ope => ope.prod);
  }
  
  orderByName() {
    this.listeOperateurs = _.sortBy(this.listeOperateurs,ope => ope.llOperateur);
  }
}
