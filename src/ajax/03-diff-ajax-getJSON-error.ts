
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


const url = 'https://httXXpbin.org/delay/1'

// const obs$ = ajax
//     .getJSON(
//         url,
//         {
//             'Content-Type': 'application/json',
//             'mi-token': 'ABC123'
//     })
//     .pipe(
//             catchError(manejaError)
//         )
    

// const obs2$ = ajax( url )
//         .pipe(
//             catchError(manejaError)
//         )

const obs$ = ajax
    .getJSON(
        url,
        {
            'Content-Type': 'application/json',
            'mi-token': 'ABC123'
    })
    .pipe(
            catchError(manejaError)
        )


const obs2$ = ajax( url )



// obs$.subscribe(
//     data => console.log('data',data)
// )
obs$.subscribe(
    observer
)
// obs2$.subscribe(
//     data => console.log('data',data)
// )





