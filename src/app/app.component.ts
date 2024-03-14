import { Component } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customers';
  customer!: Customer
  allCustomers:Customer[]=[
    {
      id: 1,
      name: "Ana García",
      address: "Calle Alcalá, 123",
      city: "Madrid",
      state: "Comunidad de Madrid",
      country: "España",
    },
    {
      id: 2,
      name: "Javier López",
      address: "Calle Gran Vía, 456",
      city: "Barcelona",
      state: "Cataluña",
      country: "España",
    },
    {
      id: 3,
      name: "Carmen Martínez",
      address: "Avenida del Parque, 789",
      city: "Sevilla",
      state: "Andalucía",
      country: "España",
    },
    {
      id: 4,
      name: "Alberto Rodríguez",
      address: "Plaza Mayor, 101",
      city: "Valladolid",
      state: "Castilla y León",
      country: "España",
    },
    {
      id: 5,
      name: "Elena Sánchez",
      address: "Calle del Mar, 222",
      city: "Valencia",
      state: "Comunidad Valenciana",
      country: "España",
    },
    {
      id: 6,
      name: "Miguel Fernández",
      address: "Paseo de la Castellana, 333",
      city: "Bilbao",
      state: "País Vasco",
      country: "España",
    },
    {
      id: 7,
      name: "Isabel Ruiz",
      address: "Callejón de los Suspiros, 444",
      city: "Málaga",
      state: "Andalucía",
      country: "España",
    },
  ];
  edit(customer:Customer){
    this.customer = customer
  }
  handleModifiedData(data: Customer) {
    this.allCustomers[data.id-1] = data
  }
}
