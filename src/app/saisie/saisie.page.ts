import { Component, OnInit } from '@angular/core';
import {ProjetService} from './services/projet-service';
import { Projet} from './model/projet';
import {Router} from '@angular/router';
@Component({
  selector: 'app-saisie',
  templateUrl: 'saisie.page.html',
  styleUrls: ['saisie.page.scss']
})
export class  SaisiePage implements OnInit {
  private selectedItem: any;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  public projets=[];
  constructor(private projetService:ProjetService, private router:Router) {
    
  }

  ngOnInit() {
   
    this.projetService.getProjets().subscribe(
      results => { 
        this.projets = results;
      }
    );
  }
  // add back when alpha.4 is out
   navigate(projet:Projet) {
     let ucProjet = projet.ucProjet;
     let llProjet = projet.llProjet;
     this.router.navigate(['saisie/responsables',{ucProjet}]);
  }
}
