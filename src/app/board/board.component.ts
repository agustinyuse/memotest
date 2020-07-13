import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../models/board';
import { Card } from '../models/card';
import { MatchResult } from '../models/match-result';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board : Board;
  matchResult: MatchResult;

  constructor(private boardService : BoardService) { }

  ngOnInit(): void {
    this.boardService.getBoard().subscribe(p => {
      this.board = p;
    });    
  }

  onCardSelected(selectedCard: Card) {
    this.matchResult = null;

    for (let i=0; i<this.board.cards.length; i++) {
      let card = this.board.cards[i];

      if (card != selectedCard && card.getIsSelected() && !card.getIsMatched()) {
        this.matchResult = new MatchResult();

        if (card.getGuid() === selectedCard.getGuid()) {
          this.matchResult.isMatched = true;
          selectedCard.setIsMatched();
          card.setIsMatched();

          setTimeout(function() {
            this.matchResult = null;
          }, 2000);
        }
        else {
          setTimeout(function() {
            selectedCard.unselect();
            card.unselect();

            this.matchResult = null;
          }, 2000);

        }

        break;
      }
    }
  }
}
