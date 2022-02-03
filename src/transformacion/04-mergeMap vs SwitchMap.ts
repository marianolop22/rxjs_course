

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { cli } from 'webpack';

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


const click$ = fromEvent(document, 'click')

const interval$ = interval(1000)
// el mergemap empieza a sumar suscripciones
// el swichmap solo mantiene una suscripcion activa
click$
    .pipe(
        // mergeMap( () => interval$)
        switchMap( () => interval$)
    )
    .subscribe(
        console.log
    )


