import { Component } from '@angular/core';

interface Icono {
  id: number;
  icono: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  iconos: Icono[] = [
    {
      id: 1,
      icono: 'assets/img/seiya.ico',
    },
  ]

}
