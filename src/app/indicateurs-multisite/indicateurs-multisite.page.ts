import { Component, OnInit, ViewChild} from '@angular/core';
import { IndicateurMultisiteService} from './services/indicateur-multisite.service';
import { IndicateurMultisite} from './model/indicateur-multisite';
import { Slides } from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-indicateurs-multisite',
  templateUrl: './indicateurs-multisite.page.html',
  styleUrls: ['./indicateurs-multisite.page.scss'],
})
export class IndicateursMultisitePage implements OnInit {
  dates=[];
  projets:string[];
  indicateurs:IndicateurMultisite[][]; // [ucIndicateur][un par projet]
  indics:IndicateurMultisite[]; // [ucIndicateur][un par projet]
  show:boolean[];
  slideOpts = {
    effect: 'flip'
  };
  @ViewChild('slides') slides: Slides;
  constructor(private indicateurMultisiteService:IndicateurMultisiteService) {
    this.dates.push(moment().startOf('day').subtract(4, "days"));
    this.dates.push( moment().startOf('day').subtract(3, "days"));
    this.dates.push(moment().startOf('day').subtract(2, "days"));
    this.dates.push( moment().startOf('day').subtract(1, "days"));
    this.dates.push(moment().startOf('day'));
    this.dates.push( moment().startOf('day').add(1, "days"));
  
    this.projets=[];
    this.projets[0]='SQF';
    this.projets[1]='AUL';
  }
  // on veut transforme une liste à plat en un double tableau
  ngOnInit() {
      this.indicateurMultisiteService.getIndicateurMultisite(this.projets,this.dates[3]).subscribe(
        res => { 
      
          this.indicateurs=[];
         
           _.forEach(res, ind => {
                  let ucProjet = ind.ucProjet;
                  let ucIndicateur = ind.ucIndicateur;
                  if (! this.indicateurs[ucIndicateur]) {
                    this.indicateurs[ucIndicateur]=[];
                  }
                  this.indicateurs[ucIndicateur].push(ind);
               });
                this.indics=[];
               this.indics= _.uniqBy(res,ind => ind.ucIndicateur);
               // initialisation à false des vues
               this.show=[];
               _.forEach(this.indics, ind=>[this.show[ind.ucIndicateur]]);
               this.slides.slideTo(4);
              }

           
      );
  }

 
  swipeEvent($event) {
    console.log($event)
   }
   slideChanged() {
    console.log('slideChanged');
   }
   nextSlide() {
    console.log('nextSlide');
   }
   prevSlide() {
    console.log('prevSlide');
   }
}
