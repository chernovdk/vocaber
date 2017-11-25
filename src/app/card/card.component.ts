import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WORDS } from '../words-test'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() onDone = new EventEmitter<number>();
  

  constructor() { }

  word:string;
  words = WORDS;
  facestate:boolean;
  wordnumber:number = 0;
  end:boolean = false;
  buttonsDisabled:boolean = true;


  ngOnInit() {

    this.word = this.words[0].word;
    this.facestate = true;
    this.updateCard();
  }

  onCorrect() {
    this.goNext();
  }

  onWrong() {
    this.goNext();
  }

  goNext() {
    this.wordnumber ++;
    this.end = this.wordnumber >= this.words.length;
    this.buttonsDisabled = true;
    if(!this.end){
      this.facestate = true;
      this.updateCard()
    } else {
      this.onDone.emit(3)
    }
    
  }

  onWordClick() {
    if(this.end) return;
    this.facestate = !this.facestate;
    this.buttonsDisabled = false;
    this.updateCard();
  }

  updateCard() {
    this.word = this.facestate?this.words[this.wordnumber].word:this.words[this.wordnumber].trans;
  }

}
