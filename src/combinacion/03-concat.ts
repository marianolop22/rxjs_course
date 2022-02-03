

import { from, Observer, of, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError, concat } from 'rxjs';
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


// concat ES UNA FUNCION a medida que se completan los obserbables, se van ejecutando los siguientes

const interval$ = interval(1000)


concat (
    interval$.pipe(
        take(3)
    ),
    interval$.pipe(
        take(2)
    ),
    [1,2,3,4,5]
).subscribe(
    console.log
)
