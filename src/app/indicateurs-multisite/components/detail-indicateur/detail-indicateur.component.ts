import { Component, OnInit, OnDestroy } from '@angular/core';
import { IndicateurMultisite} from './../../model/indicateur-multisite';
import { Subscription }   from 'rxjs';
import { IndicateurDetailService} from '../../services/indicateur-detail.service';
@Component({
  selector: 'app-detail-indicateur',
  templateUrl: './detail-indicateur.component.html',
  styleUrls: ['./detail-indicateur.component.scss']
})
export class DetailIndicateurComponent implements OnInit, OnDestroy  {
  subscription: Subscription;
   indicateurs: IndicateurMultisite[];
  constructor(private indicateurDetailService:IndicateurDetailService) {
    this.subscription = this.indicateurDetailService.indicateurs$.subscribe(
      indics => {
        console.log("ee");
        this.indicateurs = indics;
    });
   }
  
  ngOnInit() {
    
   }
   ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
