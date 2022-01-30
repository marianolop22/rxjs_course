
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, pluck, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}


const url = 'https://httpbin.org/delay/1'

const obs$ = ajax
    .getJSON(
        url,
        {
            'Content-Type': 'application/json',
            'mi-token': 'ABC123'
    })




obs$.subscribe(
    data => console.log('data',data)
)



