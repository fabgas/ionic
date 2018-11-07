import { Component, OnInit } from '@angular/core';
import {ProjetService} from './services/projet-service';
import { Projet} from './model/projet';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  public projets=[];
  constructor(private projetService:ProjetService, private router:Router) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
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
     this.router.navigate(['process/',{ucProjet,llProjet}]);
  }
}
