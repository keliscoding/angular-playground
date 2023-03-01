# Notas sobre o RxJS e Angular

1 - Sempre que realizamos um subscribe, temos como boa prática a realização do unsubscribe para liberar recursos e evitar vazamentos de memória.

## site bastante util pra gerar interfaces a partir de responses obtidas

https://app.quicktype.io/

## Operadores RxJs

Pipe- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

Tap - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

Map - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.
