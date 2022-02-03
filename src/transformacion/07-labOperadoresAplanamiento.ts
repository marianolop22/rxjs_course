

import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck, mergeMap, switchMap, take, concatMap, exhaustMap, tap } from 'rxjs/operators';

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

// helper
const peticionHttpLogin = ( userPassword ) => {

    return ajax.post('https://reqres.in/api/login?delay=1', userPassword)
        .pipe(
            map( response => response.response['token'] ),
            catchError( err => of('xxx'))
        )

}


// creo formulario
const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

//configuraciones
inputEmail.type = 'email'
inputEmail.placeholder = 'email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'password'
inputPass.value = 'cityslicka'


submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail)
form.append(inputPass)
form.append(submitBtn)

document.querySelector('body').append(form)

// streams
const submitForm$ = fromEvent<Event>(form, 'submit')
                        .pipe(
                            tap(ev => ev.preventDefault()),
                            map( ev => ({
                                email: ev.target[0].value,
                                password: ev.target[1].value
                            })),
                            // mergeMap( peticionHttpLogin )
                            // switchMap( peticionHttpLogin )
                            exhaustMap( peticionHttpLogin )
                        )

submitForm$
    .subscribe(
        console.log
    )



// mergemap, puede tener muchass suscripciones abiertas simultaneamente
// switchmap cancela cualquier suscripcion pendiente y solo regresa la ultima
// exhaustmap niega todas las peticiones posteriores después de la primera

// un operador de aplanamiento hace lo siguiente
// cuando tengamos algo que devuelve un observable o algo que devuelve un observable
// el operador nos suscribe internamente a ese observable y devuelve el producto de ese observable en la misma cadena de tiempo
