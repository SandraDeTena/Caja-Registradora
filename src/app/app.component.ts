import { Component } from '@angular/core';
import { Producto } from './lista-productos/interface-productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arrProductosComida: Producto[];
  arrProductosBebida: Producto[];

  constructor() {
    this.arrProductosComida = [
      { nombre: 'Salmón', precio: 12, imagen: 'https://www.clara.es/medio/2021/02/11/100-recetas-saludables-con-5-ingredientes-pescado_1eb7cc7f_800x700.jpg' },

      { nombre: 'Cocido Madrileño', precio: 10, imagen: 'https://lacocinademasito.com/wp-content/uploads/cocido-madrile%C3%B1o-2-1.jpg' },

      { nombre: 'Bizcocho de Plátano', precio: 4, imagen: 'https://www.pequerecetas.com/wp-content/uploads/2015/01/Bizcocho-de-platano.jpg' },

      { nombre: 'Yasikoba de Pollo y Verduras', precio: 6, imagen: 'https://www.cocinayvino.com/wp-content/uploads/2017/09/chicken-yakisoba-17-768x1152-e1506626630169.jpg' }



    ]
    this.arrProductosBebida = [
      { nombre: 'Coca.Cola- Zero', precio: 1.20, imagen: 'https://st3.sedovin.com/4807-large_default/pack-coca-cola-zero-24-latas.jpg' },

      { nombre: 'Smoothie de Manzana', precio: 3, imagen: 'https://biotrendies.com/wp-content/uploads/2015/07/Smoothie-de-manzana-y-especias.jpg' },

      { nombre: 'Rueda', precio: 12.50, imagen: 'https://cestas-marti.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/0/2020-v-32.jpg' },

      { nombre: 'Azpilucueta', precio: 17.80, imagen: 'https://i1.wp.com/marianomadrueno.es/wp-content/uploads/cm/azpilicueta-vino-tinto-crianza-rioja3.png?fit=1271%2C2125&ssl=1' }
    ]

  }
}


