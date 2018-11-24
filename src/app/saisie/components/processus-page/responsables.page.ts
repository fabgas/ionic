import { Component, OnInit, ViewChild} from '@angular/core';
import { Responsable } from '../../../model/responsable';
import { Operateur } from '../../../model/operateur';
import { ResponsableService } from '../../../services/responsable-services';
import { ActivatedRoute,Params} from '@angular/router';

import * as _ from 'lodash';
@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.page.html',
  styleUrls: ['./responsables.page.scss'],
})
export class ResponsablesPage implements OnInit {

  responsables: Responsable[];

  constructor(private responsableService: ResponsableService, private route:ActivatedRoute) {
    
  }
  // on veut transforme une liste à plat en un double tableau
  ngOnInit() {
    this.route.params.subscribe( params => 
      this.responsableService.getResponsables(params.ucProjet).subscribe(
        res => { 
          this.responsables=[];
          this.responsables = res;
        }
      )
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
