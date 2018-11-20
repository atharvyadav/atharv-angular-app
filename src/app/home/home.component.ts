import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Atharv';
  myAge = 11;
  playerage = 45;
  myName = 'Atharv';
  playerageDifference = null;

  hometownImage = 'https://viajesaltamira.com/wp-content/uploads/2017/07/Taj-Mahal-Agra-India.jpg'
  me = '../assets/images/IMG_0035.JPG';
  lebron = '../assets/Vidoes/lebron.mp4';
  Sachin = '../assets/Vidoes/Sachin.mp4';
  ageInput= null;

  randomPoints = 0;

  getRandomPoints () {
 this.randomPoints = Math.floor(Math.random() * this.myAge + 89  ) 
}
  
getAgeDifference() {
this.playerageDifference = this.ageInput - this.playerage;
this.playerageDifference = Math.abs(this.playerageDifference)

}

}
