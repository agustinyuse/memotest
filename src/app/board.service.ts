import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Board } from './models/board';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  isHittingServer: boolean;

  constructor(private http:HttpClient) {
    
   }

   getBoard() : Observable<Board> {
    if (!this.isHittingServer) {

      let board = new Board();
      board.cards = [];
      for (let i=1; i<12; i++) {
        let imageSource = "assets/images/cards/star-wars/" + i.toString().padStart(2, "0") + ".png";
        let guid = i.toString();

        board.cards.push(new Card(imageSource, guid));
        board.cards.push(new Card(imageSource, guid));
      }

      board.cards = this.shuffle(board.cards);

      return of(board);
    }

    return this.http.get<Board>("http://localhost:4200/myapp/api/model/");
   }

   shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }
}
