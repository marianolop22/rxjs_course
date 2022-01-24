
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, pluck, throttleTime, sampleTime, sample } from 'rxjs/operators'
import { ModuleResolutionCache, StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// sample va a emitir cuando el observabl emita algo

const interval$ = interval(500)
const click$ = fromEvent(document,'click')


interval$
    .pipe(
        sample(click$)
    )
    .subscribe(console.log)




