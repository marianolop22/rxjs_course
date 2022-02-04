

import { from, Observer, of, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError, concat, merge, combineLatest, forkJoin } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap, take, concatMap, exhaustMap, tap, startWith, endWith, delay } from 'rxjs/operators';
import { CleanPlugin } from 'webpack';

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


// forkjoin, toma varios observables pero deben ser finitos. retorna los valores de cada observables cuando todos se completan
// los emite como un arreglo, devuelve el ultimo valor de cada uno


const numeros$ = of (1,2,3,4)
const interlavo$ = interval(1000).pipe(take(3))
const letras$ = of ('a','b','c').pipe(delay(3500))

// forkJoin ([
//     numeros$,
//     interlavo$,
//     letras$
// ])
// .subscribe( console.log)

// forkJoin ([
//     numeros$,
//     interlavo$,
//     letras$
// ])
// .subscribe( resp => {
//     console.log('numero', resp[0]);
//     console.log('interval', resp[1]);
//     console.log('letras', resp[2]);
// })

// forkJoin ({
//     numeros$,
//     interlavo$,
//     letras$
// })
// .subscribe( resp => {
//     console.log(resp);
// })

forkJoin ({
    num: numeros$,
    int: interlavo$,
    let: letras$
})
.subscribe( resp => {
    console.log(resp);
})









