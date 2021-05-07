import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from './interface-productos';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() seleccionProducto: EventEmitter<Producto>; //En nuestro caso es un Producto entero que ya lo hemos realizado a partir de la interface. Ya está DECLARADO.


  constructor() {
    this.seleccionProducto = new EventEmitter();//¿Cuándo quiero emitir el producto? Cuando haga el click
  }

  ngOnInit(): void {
  }

  onClick(pProducto: Producto) {
    this.seleccionProducto.emit(pProducto);


  }

}
