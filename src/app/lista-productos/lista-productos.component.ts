import { Component, Input, OnInit } from '@angular/core';
import { Producto } from './interface-productos';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];


  constructor() { }

  ngOnInit(): void {
  }

}
