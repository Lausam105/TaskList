import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = "Lista de Tareas"
  texto: string = "Hola soy Carim";
  
  constructor() { }

  ngOnInit(): void {
  }

  toogleAddTask(){
    console.log("toogleAddTask!");
  }
  
}
