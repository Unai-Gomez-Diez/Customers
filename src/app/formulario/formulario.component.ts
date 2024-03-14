import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Customer} from "../customer";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input() customer!: Customer

  @Output() customerChanged: EventEmitter<Customer> = new EventEmitter<Customer>();
  constructor(private fb: FormBuilder) {
  }
  formulario = this.fb.group({
    name:['', Validators.required],
    address:['', Validators.required],
    city:['', Validators.required],
    state:['', Validators.required],
    country:['', Validators.required],
  })
  submit(){

    if (this.formulario.valid) {
      this.customer.name = this.formulario.get("name")?.value ?? "";
      this.customer.address = this.formulario.get("address")?.value ?? "";
      this.customer.city = this.formulario.get("city")?.value ?? "";
      this.customer.state = this.formulario.get("state")?.value ?? "";
      this.customer.country = this.formulario.get("country")?.value ?? "";

      this.customerChanged.emit(this.customer);
      this.formulario.reset()
    }
  }
}
