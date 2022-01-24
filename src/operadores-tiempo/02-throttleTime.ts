
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, pluck, throttleTime } from 'rxjs/operators'
import { StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// throttleTime este emite pero descarta todos las emisiones durante el tiempo configurado

const click$ = fromEvent( document,'click')

click$
    .pipe(
        throttleTime(3000)
    )
    // .subscribe( console.log)


// ejemplo 3
const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$
    .pipe(
        throttleTime(1000,asyncScheduler,{leading:true, trailing:true}),
        pluck('target','value'),
        // distinctUntilChanged()
    )
    .subscribe((console.log))





