

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap, take, concatMap } from 'rxjs/operators';

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


// concatmap no empieza a emitir el nuevo observable hasta que se complete el observable anterior
// en este ejemplo, hago click 3 veces, entonces ejecuta el intervalo uno después del otro

const interval$ = interval(500).pipe(take(3))


const click$ = fromEvent(document, 'click')

click$
    .pipe(
        concatMap( ()=>  interval$)
    )
    .subscribe(
        console.log
    )





