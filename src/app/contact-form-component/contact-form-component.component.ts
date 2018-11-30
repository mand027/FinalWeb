import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contact-form-component.component.html',
  styleUrls: ['./contact-form-component.component.css']
})
export class ContactFormComponentComponent implements OnInit {
  submitCompany(form){
    console.log(form.value);
    alert("Pudo registrarse sin problemas");
    form.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
