

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


// referencias

const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')

loadingDiv.innerHTML = 'Cargando...'
const body = document.querySelector('body')

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true),
    )
    .subscribe( response => {

        if ( response ===  true ) {
            body.append(loadingDiv)
        }  else {
            document?.querySelector('.loading')?.remove();
            console.log(response);
        }



    })




