import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { Process } from '../../model/process';
import { ProcessService } from './../../service/process-service';
import * as moment from 'moment';
@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements OnInit {
  processus:Process[];
  @Input('date') date;
  @Input('ucProjet') ucProjet;
  constructor(private processService:ProcessService,private router: Router) { }

  ngOnInit() {
  
    this.processService.getProcess(this.ucProjet,this.date).subscribe(
      result => this.processus = result
    );
  }
  navigate(process:Process) {
    let ucProcessus = process.ucProcessus;
    let llProcessus = process.llProcessus;
    let ucProjet = this.ucProjet;
    let date = this.date;
    console.log("ucProjet"+ ucProjet + "processus" + ucProcessus + "date" + date);
    this.router.navigate(['detailprocess',{ucProjet,ucProcessus,date}]);
 }
}
