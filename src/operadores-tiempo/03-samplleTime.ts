
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, pluck, throttleTime, sampleTime } from 'rxjs/operators'
import { ModuleResolutionCache, StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// sampleTime

const click$ = fromEvent<MouseEvent>( document,'click')


click$
    .pipe(
        map(({x,y}) => ({x,y})), // es más eficiente con esto arriba
        sampleTime(2000)

    )
    .subscribe( console.log)






