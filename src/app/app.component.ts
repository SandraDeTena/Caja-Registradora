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

      { nombre: 'Bizcocho de Plátano', precio: 4, imagen: 'https://bizcochospedia.com/imagenes/bizcocho-de-platano-y-yogur-625x307.jpeg' },

      { nombre: 'Yasikoba de Pollo y Verduras', precio: 6, imagen: 'https://www.cocinayvino.com/wp-content/uploads/2017/09/chicken-yakisoba-17-768x1152-e1506626630169.jpg' }



    ]
    this.arrProductosBebida = [
      { nombre: 'Coca.Cola- Zero', precio: 1.20, imagen: 'http://www.redstudio.es/wp-content/uploads/2017/05/1495706496_la-cocacola-vuelve-a-ser-roja-redstudio-blog.jpg' },

      { nombre: 'Smoothie de Manzana', precio: 3, imagen: 'https://smoothies.com.es/img/smoothie-de-manzana-196.jpg' },

      { nombre: 'Rueda', precio: 12.50, imagen: 'https://247481-765666-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/09/Copa-D.O.-Rueda.jpg' },

      { nombre: 'Azpilucueta', precio: 17.80, imagen: 'https://www.azpilicueta.com/sites/default/files/styles/cropper/public/Qu%C3%A9%20son%20los%20vinos%20de%20autor.jpg?itok=eYMSLxnq' }
    ]

  }
}


