import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DefaultResponse } from '../../shared/models/default-response.model';
import { Observable } from 'rxjs';
import { messages, pathValues } from '../../const';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(
    private http: HttpClient
  ) { }

  public enviarSolicitacaoCredito(form): Observable<any> {
    if (form == null) {
      throw new Error(messages.erro_parametro_invalido);
    }
    return this.http.post<DefaultResponse>(
      pathValues.financeiro + `/solicitar`,
      form,
      { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=utf-8' }) })
      .pipe(
        map((response: DefaultResponse) => {
          console.log(response);
          if (response.status.codigo == '0') {
            return response.data;
          } else if (response.status.mensagem) {
            throw new Error(response.status.mensagem);
          } else {
            throw new Error(messages.erro_inesperado_servico);
          }
        }),
        catchError(
          (error: Error) => {
            throw new Error(error.message ? error.message : messages.erro_inesperado_servico);
          }
        )
      );
  }

  public buscarDominiosRisco(): Observable<any> {
    return this.http.get<DefaultResponse>(
      pathValues.financeiro + `/risco`,
      { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=utf-8' }) })
      .pipe(
        map((response: DefaultResponse) => {
          console.log(response);
          if (response.status.codigo == '0') {
            return response.data;
          } else if (response.status.mensagem) {
            throw new Error(response.status.mensagem);
          } else {
            throw new Error(messages.erro_inesperado_servico);
          }
        }),
        catchError(
          (error: Error) => {
            throw new Error(error.message ? error.message : messages.erro_inesperado_servico);
          }
        )
      );
  }

}
