import { WORDS } from './../vocaber-lib';
import { CardComponent } from './../card/card.component';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  @ViewChild(CardComponent)
  private cardComp: CardComponent;

  @Output() onDone = new EventEmitter<number>();
  
  words = WORDS;
  wordnumber:number = 0;
  end:boolean = false;
  buttonsDisabled:boolean = true;

  constructor() { }

  ngOnInit() {
    this.cardComp.showFirst({front: this.words[this.wordnumber].word, back: this.words[this.wordnumber].trans});
  }

  onCorrect() {
    this.goNext();
  }

  onWrong() {
    this.goNext();
  }

  goNext() {
    this.end = this.wordnumber >= (this.words.length-1);
    if(!this.end){
      this.wordnumber ++;
      this.buttonsDisabled = true;
      this.cardComp.showNext({front: this.words[this.wordnumber].word, back: this.words[this.wordnumber].trans});
    } else {
      this.onDone.emit(3)
    }
    
  }

  onWordClick() {
    if(!this.end) {
      this.cardComp.onClick();
      this.buttonsDisabled = false;
    }
    
  }

 
}
