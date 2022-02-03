import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  heroImage: string;

  images: string[] = [
    "cuisine",
    "cuisine2",
    "ilot",
    "salon",
    "salon2",
    "sdb"
  ]

  constructor() {
    const index: number = Math.floor(Math.random() * this.images.length);
    const image: string = this.images[index];
    console.log(image)
    this.heroImage = `url('../../assets/heroImages/${image}.jpg')`
  }

  ngOnInit(): void {
  }

}
