
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce, scan, first } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// first ejecuta hasta que se cumppla por primera vez la condición

const click$ = fromEvent<MouseEvent>(document,'click')


click$
    .pipe(
        tap( event => console.log(event.clientY)),
        map( ({clientY, clientX}) => ({
            clientY,
            clientX
        })),
        first(
            event => {
                return event.clientY > 150
            }
        )
    )
    .subscribe(observer)
