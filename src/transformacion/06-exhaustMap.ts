

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap, take, concatMap, exhaustMap } from 'rxjs/operators';

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


// exhausMap se diferencia del exhaustmap, si viene una nueva suscripcion y la actual no terminó, entonces la descarta.
// una vez que se completa la suscripcion, si entra algo nuevo, ahí lo emite


const interval$ = interval(500).pipe(take(3))


const click$ = fromEvent(document, 'click')

click$
    .pipe(
        exhaustMap( ()=>  interval$)
    )
    .subscribe(
        console.log
    )









