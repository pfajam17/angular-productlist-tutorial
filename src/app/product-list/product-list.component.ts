import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Aye yer product has been shared matey');
  }

  onNotify() {
    window.alert("Yeah I'll give ye a ring when the product's on sale mate");
  }
}
