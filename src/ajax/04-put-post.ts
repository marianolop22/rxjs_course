
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, pluck, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";

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


const url = 'https://httpbin.org/delay/1'

// let obs$ = ajax.post(
//     url,
//     {
//         id: 1,
//         nombre: 'Mariano'
//     },
//     {
//         'mi-token':'ABC123'
//     }
// ).subscribe( console.log)


// obs$ = ajax.put(
//     url,
//     {
//         id: 1,
//         nombre: 'Mariano'
//     },
//     {
//         'mi-token':'ABC123'
//     }
// ).subscribe( console.log)

ajax({
    url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123',
    },
    body: {
        id: 1,
        nombre: 'Mariano'
    }
}).subscribe(console.log)




