import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-games',
  templateUrl: './math-games.component.html',
  styleUrls: ['./math-games.component.scss']
})
export class MathGamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  player1img = '../assets/images/atharv.jpg';
  player2img = '../assets/images/jami.jpg';
}
