
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce, scan } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// es para limitar la cantidad de veces que ejecuta un observable
const numeros$ = of (1,2,3,4,5)

numeros$
    .pipe(
        tap( console.log),
        take(3) // emite esa cantidad y lo completa
    )
    .subscribe(
        observer
    )