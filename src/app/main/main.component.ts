import { Component } from '@angular/core';

interface Articulo {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  descripcion: string;

}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  articulos: Articulo[] = [
    {
      id: 1,
      nombre: 'Saga de Geminis Sapuris',
      imagen: 'assets/img/saga.jpg',
      precio: 50.00,
      descripcion: "Descripción del producto 1."
    },

    {
      id: 2,
      nombre: 'Camus de Acuario Sapuris',
      imagen: 'assets/img/camus.jpg',
      precio: 50.00,
      descripcion: "Descripción del producto 2."
    },

    {
      id: 3,
      nombre: 'Shura de Capricornio Sapuris',
      imagen: 'assets/img/shura.jpg',
      precio: 74.00,
      descripcion: "Descripción del producto 3."
    },

    {
      id: 4,
      nombre: 'DeathMask de Cancer Sapuris',
      imagen: 'assets/img/death.jpg',
      precio: 40.00,
      descripcion: "Descripción del producto 4."
    }

    , {
      id: 5,
      nombre: 'Shion de Aries Sapuries',
      imagen: 'assets/img/shion.jpg',
      precio: 30.00,
      descripcion: "Descripción del producto 5."
    },
    {
      id: 6,
      nombre: 'Afrodita de Piscis Sapuris',
      imagen: 'assets/img/afrodita.jpg',
      precio: 210.00,
      descripcion: "Descripción del producto 6."
    }

  ]

  nuevoArticulo: any = {
    id: null,
    nombre: null,
    precio: null,
    imagen: '',
  };

  agregarArticulo() {
    this.articulos.push(this.nuevoArticulo);
    this.nuevoArticulo = {
      id: null,
      nombre: null,
      precio: null,
      imagen: '',
    };
  };

  compras: any[] = [];
  totalCompra: number = 0;

  agregarCarrito(articulo: any) {
    this.compras.push(articulo);
    this.calcularTotalCompra();
  };

  eliminarCarrito(index: number) {
    this.compras.splice(index, 1);
  }

  calcularTotalCompra() {
    this.totalCompra = this.compras.reduce((total, articulo) => {
      return total + articulo.precio;
    }, 0);
  }

  realizarCompra() {
    if (this.compras.length === 0) {
      alert('Agrega al menos un producto al carrito antes de realizar la compra.');
      return;
    }

    // Aquí puedes realizar las acciones necesarias para completar la compra, como enviar los datos al servidor, procesar el pago, etc.

    // Ejemplo de acciones simuladas:
    alert(`Compra realizada por un total de $${this.totalCompra.toFixed(2)}`);
    this.compras = [];
    this.totalCompra = 0;
  }

}
