import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imageUrl = '';
  name = 'Throwie T-Shirt';
  price = '$48.92';
  imgs = [
    {
      name: 'graphics',
      image: 'https://i.postimg.cc/x1DS4SQR/graphics-home-4-410x487.jpg',
    },
    {
      name: "men's",
      image: 'https://i.postimg.cc/KYkDWC5Z/mens-home-6-410x487.jpg',
    },
    {
      name: 'short',
      image: 'https://i.postimg.cc/hv3Ld9mM/shorts-home-4-410x487.jpg',
    },
  ];
}
