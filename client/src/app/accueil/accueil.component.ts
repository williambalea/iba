import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  heroImage: string;
  
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
  
  constructor(private route: ActivatedRoute) {
    const index: number = Math.floor(Math.random() * this.images.length);
    const image: string = this.images[index];
    console.log(image)
    this.heroImage = `url('../../assets/heroImages/${image}.jpg')`
  }


  getErrorMessage(input: FormControl): string {
    if (input.hasError('required')) {
      return 'Entrez une valeur';
    }

    return input.hasError('email') ? 'Adresse non valide' : '';
  }

}
