import { Component, OnDestroy } from '@angular/core';
import { Subscription, map, switchMap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';
import { LivrosResultado, VolumeInfo } from '../../models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  campoBusca = new FormControl();
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) {}

  // é convensao da comunidade botar um $ no final de um atributo que representa um observable
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map((items) => {
      this.listaLivros = this.livrosResultadoParaLivros(items);
    })
  );

  /*   buscarLivros() {
    this.subscription = this.service.buscar(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.livrosResultadoParaLivros(items);
      },
      error: (err) => console.error(err),
    });
  } */

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
