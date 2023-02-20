import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Array<Pensamento> = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    // faz parte do ciclo de vida, se vc quiser que algo seja executado assim que o componente iniciar, vc bota aqui.
    this.service.listar().subscribe((listaPensamento) => {
      this.listaPensamentos = listaPensamento;
    });
  }
}
