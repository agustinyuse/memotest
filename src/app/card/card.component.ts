import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() cardSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCard() {
    if (this.card.getIsMatched()) {
      return;
    }

    this.card.select();

    this.cardSelected.emit(this.card);
  }
}
