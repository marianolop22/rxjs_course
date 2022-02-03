
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, mergeMap, pluck, take, takeUntil } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

const manejaError = (resp: AjaxError) => {
    console.log('error', resp.message);
    return of({
        ok: false,
        usuarios:[]
    })
} 


const letras$ = of ('a','b','c' );


letras$
.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe(
//     observer
// )

// son operadores de aplanamiento

const mouseDown$ = fromEvent (document, 'mousedown')
const mouseUp$ = fromEvent (document, 'mouseup')
const interval$ = interval()

mouseDown$
.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(
    console.log
)

