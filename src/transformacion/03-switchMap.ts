

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsers } from '../interfaces/github-users.interface';

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



const textInput = document.createElement('input')
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')
const url = 'http://httpbin.org/delay/1?arg=';

// cancela todas las subscripciones anteriores hasta quedarse con la última

input$
    .pipe(
        pluck('target','value'),
        switchMap( texto => ajax.getJSON(url + texto))
    )
    .subscribe(
        console.log
    )