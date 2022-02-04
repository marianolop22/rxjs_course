

import { from, Observer, of, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError, concat, merge, combineLatest } from 'rxjs';
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


// combineLatest recibe varios observables, los combina y recibe los valores de ambos todos los observables este regresa un nuevo observable
//empieza a emitir cuando todos los observablels emitieron y emiten un array con el último de cada uno

// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')


// combineLatest( 
//     keyup$.pipe(map( event => event['type'])),
//     click$.pipe(map( event => event['type'])),
//     )
//     .subscribe(
//         console.log
//     )

const input1 = document.createElement('input')
const input2 = document.createElement('input') 

input1.placeholder = 'email@gmail.com'
input2.placeholder = 'password'
input2.type = 'password'

document.querySelector('body').append(input1,input2)

//helper
const getInpuStream = (element:HTMLElement) => {
    return fromEvent<KeyboardEvent>(element, 'keyup')
        .pipe(
            map<KeyboardEvent, string>( event => event.target['value'] )
        )
}



combineLatest(
    getInpuStream( input1),
    getInpuStream( input2)
)
.subscribe(
    console.log
)



