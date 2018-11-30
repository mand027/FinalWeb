import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-partnersignup',
  templateUrl: './partnersignup.component.html',
  styleUrls: ['./partnersignup.component.css']
})
export class PartnersignupComponent implements OnInit {
  industries = [
    {id: 1, name: "Alvaro Obregon"},
    {id: 2, name: "Azcapotzalco"},
    {id: 3, name: "Benito Juarez"},
    {id: 4, name: "Coyoacan"},
    {id: 5, name: "Cuajimalpa"},
    {id: 6, name: "Cuauhtemoc"},
    {id: 7, name: "Gustavo A. Madero"},
    {id: 8, name: "Itztacalco"},
    {id: 9, name: "Magdalena Contreras"},
    {id: 10, name: "Miguel Hidalgo"},
    {id: 11, name: "Milpa Alta"},
    {id: 12, name: "Tlahuac"},
    {id: 13, name: "Tlalpan"},
    {id: 13, name: "Venustiano Carranza"},
    {id: 13, name: "Xochimilco"}


  ];
  constructor() { }

  ngOnInit() {
  }

}
