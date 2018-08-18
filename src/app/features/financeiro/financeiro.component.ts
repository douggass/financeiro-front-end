import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formFinanceiro: FormGroup;

  ngOnInit() {
    this.formFinanceiro = this.formBuilder.group({
      nome: ['', Validators.required],
      limiteCredito: ['', Validators.required],
      risco: ['', Validators.required]
    });
  }

}
