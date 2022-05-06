import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  heroImage: string;
  imagesPosition: number;
  
  images: string[] = [
    "cuisine",
    "cuisine2",
    "ilot",
    "salon",
    "salon2",
    "sdb"
  ]
  
  email = new FormControl('', [Validators.required, Validators.email]);
  emailContent = new FormControl('', [Validators.required])
  
  constructor() {
    this.imagesPosition = Math.floor(Math.random() * this.images.length);
    const image: string = this.images[this.imagesPosition];
    this.heroImage = `url('../../assets/heroImages/${image}.jpg')`;
  }

  ngOnInit(): void {
    setInterval(() => this.imageCarousel(), 60000);
  }

  imageCarousel() {
    console.log('hey');

    this.imagesPosition++;
    if (this.imagesPosition >= this.images.length) this.imagesPosition = 0;
    const image: string = this.images[this.imagesPosition];
    this.heroImage = `url('../../assets/heroImages/${image}.jpg')`;
  }

  getErrorMessage(input: FormControl): string {
    if (input.hasError('required')) {
      return 'Entrez une valeur';
    }

    return input.hasError('email') ? 'Adresse non valide' : '';
  }

}
