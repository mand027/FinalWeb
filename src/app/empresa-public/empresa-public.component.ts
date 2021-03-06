import { Component, OnInit } from '@angular/core';
import { Marcador } from '../classes/marcador.class';
import { MatSnackBar } from '@angular/material';


import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-empresa-public',
  templateUrl: './empresa-public.component.html',
  styleUrls: ['./empresa-public.component.css']
})
export class EmpresaPublicComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 19.283769;
  lng = -99.146259;

//  19.380367, -99.146259

//19.283769, -99.136527

  constructor() {

    //const nuevoMarcador = new Marcador(51.678418, 7.809007);

  //  this.marcadores.push( nuevoMarcador );

    if ( localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));

    }

  }

  ngOnInit() {
  }

  agregarMarcador( evento ){

    const coords = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push( nuevoMarcador );

    this.guardarStorage();
  }

  borrarMarcador( i: number ) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

}
