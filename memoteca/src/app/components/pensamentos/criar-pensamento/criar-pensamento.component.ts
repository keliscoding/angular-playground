import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    this.service.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['../listarPensamento']);
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
