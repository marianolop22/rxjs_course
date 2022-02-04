

import { from, Observer, of, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError, concat, merge } from 'rxjs';
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


// merge recibe varios observables y devuelve el producto de esos observables combinados
const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')


merge( 
    keyup$.pipe(map( event => event['type'])),
    click$.pipe(map( event => event['type'])),
    )
    .subscribe(
        console.log
    )

