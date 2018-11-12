import { Component, OnInit, ViewChild,Input  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Projet } from '../list/model/projet'
import { Slides } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  projet:Projet;
  dates=[];
  slideOpts = {
    effect: 'flip'
  };
  @ViewChild('slides') slides: Slides;


 constructor(private route: ActivatedRoute) {
   
  }
  ngOnInit() {
    this.route.params.subscribe( params => this.projet = new Projet(params.ucProjet,params.llProjet) );
    this.dates.push(moment().startOf('day').subtract(4, "days"));
    this.dates.push( moment().startOf('day').subtract(3, "days"));
    this.dates.push(moment().startOf('day').subtract(2, "days"));
    this.dates.push( moment().startOf('day').subtract(1, "days"));
    this.dates.push(moment().startOf('day'));
    this.dates.push( moment().startOf('day').add(1, "days"));
    this.slides.slideTo(4);
    
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
