
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// takeuntil va a ejecutar hasta que pase un evento, lleva otro observable
// skip es para saltar las primeras n cantidad de emisiones


const button = document.createElement('button')
button.innerHTML = 'Detener Observable'

document.querySelector('body').append(button)

const counter$ = interval(1000)
// const clickBtn$ = fromEvent( button, 'click')
const clickBtn$ = fromEvent( button, 'click')
    .pipe(
        tap( ()=> console.log('tap antes del skip')),
        skip(1),
        tap( ()=> console.log('tap despues del skip')),
    ) // va a detener el observable despues del primer click



counter$
    .pipe(
        takeUntil( clickBtn$ )
    )
    .subscribe(observer)
