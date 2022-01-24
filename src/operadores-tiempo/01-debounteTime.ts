
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, pluck } from 'rxjs/operators'
import { StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// debounceTime restringir la cantidad de emisiones en el tiempo que decimos

const click$ = fromEvent( document,'click')

click$
    .pipe(
        debounceTime(3000)
    )
    // .subscribe( console.log)


// ejemplo 3
const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$
    .pipe(
        debounceTime(1000),
        pluck('target','value'),
        distinctUntilChanged()
    )
    .subscribe((console.log))




