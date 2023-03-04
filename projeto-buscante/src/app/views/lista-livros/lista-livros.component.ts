import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Item } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();

  constructor(private service: LivroService) {}

  // é convensao da comunidade botar um $ no final de um atributo que representa um observable
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map((items) => this.livrosResultadoParaLivros(items))
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
