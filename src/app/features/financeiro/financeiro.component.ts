import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceiroService } from './financeiro.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private financeiroService: FinanceiroService,
    public snackBar: MatSnackBar
  ) { }

  private _riscos = [];

  formFinanceiro: FormGroup;

  ngOnInit() {
    this.buscarRiscos();
    this.formFinanceiro = this.formBuilder.group({
      nomeCliente: ['', Validators.required],
      limiteCredito: ['', Validators.required],
      risco: ['', Validators.required]
    });
  }

  get riscos() {
    return this._riscos;
  }

  private buscarRiscos() {
    this.financeiroService.buscarDominiosRisco().subscribe(
      data => {
        this._riscos = data;
      }, err => {
        console.log(err);
      }
    );

  }

  submit() {
    this.financeiroService.enviarSolicitacaoCredito(this.formFinanceiro.value).subscribe(
      data => {
        this.snackBar.open("Solicitação enviada com sucesso.", "Ok", {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.formFinanceiro.reset({
          nomeCliente: '',
          limiteCredito: '',
          risco: null
        });
      }, (err: Error) => {
        this.snackBar.open(err.message, "Ok", {duration: 4000});
      }
    );
  }

}
