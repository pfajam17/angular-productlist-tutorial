export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone Extra Lorge',
    price: 799,
    description: "Ay this thing's humongous I swear no earthly pocket can contain it"
  },
  {
    id: 2,
    name: 'Phone smol',
    price: 699,
    description: "This lil lad's gonna get lost between yer fingers, thas how smol it is oh also it's got a frickin camera how cool is that you can call your aunt on this phone or the president but just don't call me I'm telephone shy man who's gonna buy this thing"
  },
  {
    id: 3,
    name: 'Phone Lorge',
    price: 299,
    description: 'Solid phone for a solid gentleman, buy to reaffirm your social standing and impress the lads'
  },
  {
    id: 4,
    name: 'Just a phone',
    price: 8999,
    description: "no"
  },
  {
    id: 5,
    name: 'More than ust a phone',
    price: 8998,
    description: "yes"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/