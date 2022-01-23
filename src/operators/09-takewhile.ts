
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// takewhile se va a ejecutar mientras se cumpla la consicion

const click$ = fromEvent<MouseEvent>(document, 'click')

click$
    .pipe(
        map(
            ({x,y}) => ({x,y})
        ),
        // takeWhile( ({y})=> y <= 150 )
        takeWhile( ({y})=> y <= 150, true ) // esto hace que se envíe el último valor que corta la condicion
    )
    .subscribe( observer)
