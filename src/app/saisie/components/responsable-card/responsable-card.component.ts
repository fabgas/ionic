import { Component, OnInit, Input } from '@angular/core';
import { Responsable} from './../../../model/responsable';
import { Operateur} from './../../../model/operateur';
import { Router } from '@angular/router';
import { ResponsableService} from '../../../services/responsable-services';
@Component({
  selector: 'app-responsable-card',
  templateUrl: './responsable-card.component.html',
  styleUrls: ['./responsable-card.component.scss']
})
export class ResponsableCardComponent implements OnInit {

 @Input('responsable') responsable: Responsable;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onClick() {
   
    this.router.navigate(['indicateurs-multisite/detailIndicateur']);
   
  }
}
