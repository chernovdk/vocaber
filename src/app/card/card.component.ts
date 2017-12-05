import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardData } from '../vocaber-lib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flip', [
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      state('front', style({
        transform: 'rotateY(0)'
      })),
      state('front-prev', style({
        transform: 'translate3d(-120%,0,-400px)'
      })),
      state('back-prev', style({
        transform: 'translate3d(-120%,0,-400px) rotateY(180deg)'
      })),
      transition('back => front', animate('500ms ease-in-out', style({
        transform: 'rotateY(360deg)'
      }))),
      transition('front => back, front => front-prev, back => back-prev', animate('500ms ease-in-out')),
      transition('front-prev => front, back-prev => front', animate('0ms')),
    ]),
    
    trigger('fake', [
      state('from-next', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('from-prev', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => from-next',[ style({
          transform: 'translate3d(100%,0,300px)'
        }), 
        animate('500ms ease-in-out', style({
          transform: 'translate3d(0,0,0)'
      }))]),
    ])  
  ]
})
export class CardComponent implements OnInit {
  flipState: string = 'front';
  fakeState: string;
  fakeVisible: boolean = false;
  moving: boolean = false;
  fliping: boolean = false;
  data:CardData;
  dataNext:CardData;
  constructor() {}
  
  
  ngOnInit() {
  }

  onClick() {
    if (!this.moving && !this.fliping){
      this.flipState = (this.flipState == 'front') ? 'back' : 'front';
    }
  }

  showFirst(data:CardData) {
    this.data = data;
  }

  showNext(data:CardData) {
    this.dataNext = data;
    this.flipState = this.flipState+'-prev';
    this.fakeState = 'from-next';
    this.fakeVisible = true;
  }

  public flipStarted($event) {
    this.fliping = true;
  }

  public flipDone($event) {
    this.fliping = false;
    this.removeFake();
  }

  public fakeStarted($event) {
    this.moving = true;
  }

  public fakeDone($event) {
    this.moving = false;
    this.removeFake(); 
  }

  private removeFake() {
    if (this.fakeVisible && !this.fliping && !this.moving) {
      this.data = this.dataNext;
      this.fakeVisible = false;
      this.flipState = 'front';
      console.log(this.flipState)
    }
  }
}
