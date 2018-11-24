import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { IndicateurMultisite} from '../model/indicateur-multisite';
@Injectable()
export class IndicateurDetailService {
 
  // Observable string sources
  private indicateurDetailSource = new BehaviorSubject<IndicateurMultisite[]>([]);
  // Observable string streams
  indicateurs$ = this.indicateurDetailSource.asObservable();
 
  // Service message commands
  indicateurs(indicateurs: IndicateurMultisite[]) {
    this.indicateurDetailSource.next(indicateurs);
  }
 
}