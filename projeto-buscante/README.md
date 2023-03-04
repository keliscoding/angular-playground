# Notas sobre o RxJS e Angular

1 - Sempre que realizamos um subscribe, temos como boa prática a realização do unsubscribe para liberar recursos e evitar vazamentos de memória.

## site bastante util pra gerar interfaces a partir de responses obtidas

https://app.quicktype.io/

## Operadores RxJs

**Pipe**- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

**Tap** - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

**Map** - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.

**SwitchMap** - Operador de Transformação. Cancela requisições de observables anteriores, emitindo valores apenas do Observable projetado mais recentemente.

**Pipe Async** - O método de subscriber (inscrever) e unsubscriber (desinscrever) é tão comum que o Angular criou um recurso para facilitar nossa vida, chamado | async (pipe async).

**Filter** - Operador de filtragem. Filtra os itens emitidos pelo Observable de origem, permitindo apenas aqueles que satisfaçam uma condição especificada.

**DebounceTime** - Operador de filtragem. Retorna um Observable que atrasa as emissões do Observable de origem pelo tempo especificado.

**DistinctUntilChanged** - Operador de filtragem. Retorna um Observable que emite todos os valores enviados pelo observable de origem se forem distintos em comparação com o último valor emitido pelo observable de resultado.

**catchError** - Operador de Tratamento de Erros. Captura erros no observable manipulado retornando um novo observable ou lançando um erro.

**throwError** - Operador de Criação. Cria um observable que criará uma instância de erro e a enviará ao consumidor como um erro imediatamente após a assinatura.

**EMPTY** - Operador de Criação. Cria um Observable simples que não emite itens para o Observer e imediatamente emite uma notificação de complete.

**of** - Operador de Criação. Converte os argumentos em observable. Um Observable que emite os argumentos descritos e depois conclui.
