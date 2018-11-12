import { Component, OnInit, Input } from '@angular/core';
import { IndicateurMultisite} from './../../model/indicateur-multisite';
import { Router } from '@angular/router';
import { IndicateurDetailService} from '../../services/indicateur-detail.service';
@Component({
  selector: 'app-indicateur-card',
  templateUrl: './indicateur-card.component.html',
  styleUrls: ['./indicateur-card.component.scss']
})
export class IndicateurCardComponent implements OnInit {

 @Input('indicateurs') indicateurs: IndicateurMultisite[];

  constructor(private router: Router, private indicateurDetailService:IndicateurDetailService) { }

  ngOnInit() {
    
  }

  onClick() {
    this.indicateurDetailService.indicateurs(this.indicateurs);
    this.router.navigate(['indicateurs-multisite/detailIndicateur']);
   
  }
}
