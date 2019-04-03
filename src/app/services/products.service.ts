import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:object = {
    clothes: [
      {
        sku: 101,
        title: 'Top',
        price: 500,
        origin: 'Delhi',
        dest: ['Amritsar', 'Jalandhar', 'Mumbai', 'Surat']
      },
      {
        sku: 102,
        title: 'Jean',
        price: 800,
        origin: 'Chandigarh',
        dest: ['Amritsar', 'Shimla']
      },
      {
        sku: 103,
        title: 'Socks',
        price: 200,
        origin: 'Amritsar',
        dest: ['Delhi']
      }
    ],
    mobiles: [
      {
        sku: 104,
        title: 'Iphone 7',
        price: 35000,
        origin: 'Delhi',
        dest: ['Amritsar', 'Jalandhar', 'Mumbai', 'Surat']
      },
      {
        sku: 105,
        title: 'Iphone X',
        price: 75000,
        origin: 'Chandigarh',
        dest: ['Amritsar', 'Shimla']
      },
      {
        sku: 106,
        title: 'Samsung Galaxy M30',
        price: 22000,
        origin: 'Amritsar',
        dest: ['Delhi']
      }
    ],
    electronics: [
      {
        sku: 107,
        title: 'LED',
        price: 84000,
        origin: 'Delhi',
        dest: ['Amritsar', 'Jalandhar', 'Mumbai', 'Surat']
      },
      {
        sku: 108,
        title: 'Plasma',
        price: 55000,
        origin: 'Amritsar',
        dest: ['Delhi']
      },
      {
        sku: 109,
        title: 'Home Theatre',
        price: 22000,
        origin: 'Chandigarh',
        dest: ['Amritsar', 'Shimla']
      }
    ],
    automobile: [
      {
        sku: 110,
        title: 'RE Bullet 350',
        price: 120000,
        origin: 'Chandigarh',
        dest: ['Amritsar', 'Shimla']
      },
      {
        sku: 111,
        title: 'Pulsar',
        price: 40000,
        origin: 'Amritsar',
        dest: ['Delhi']
      },
      {
        sku: 112,
        title: 'Activa',
        price: 32000,
        origin: 'Delhi',
        dest: ['Amritsar', 'Jalandhar', 'Mumbai', 'Surat']
      }
    ]
  }
  constructor() { }

  getProduct(id) {
    for(let key in  this.products) {
      for(let prod of this.products[key]) {
        if(prod.sku == id) {
          return prod;
        }
      }
    }
  }

  getCategory(cat) {
    return this.products[cat];
  }
}
