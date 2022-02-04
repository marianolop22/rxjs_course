

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


const GITHUB_API_URL = 'https://api.github.com/users'
const GITHUB_USER = 'marianolop22'


forkJoin ({
    usuario:  ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),

})
.subscribe( resp => {
    console.log(resp);
})





