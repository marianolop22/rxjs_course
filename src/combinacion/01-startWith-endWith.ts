

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap, take, concatMap, exhaustMap, tap, startWith, endWith } from 'rxjs/operators';

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

// startWith justo antes de emitir el primer valor, emite un vaor síncrono y luego emite los valores que necesita
// endwith es lo mismo, pero gewnera al final de todo lo que yo quiera

const numeros$ = of (1,2,3)
numeros$
    .pipe(
        startWith('a','b','c'),
        endWith('x','y','z'),
        
    )
    .subscribe(
        console.log
    )




