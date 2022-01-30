
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, pluck, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

    const manejaErrores = async(response: Response) => {
        if ( !response.ok ) {
            // console.log('aca',await response.json());
                const message = await response.text()
                throw new Error (message);
           
        }
        return response;

    }

    const url = 'https://api.github.com/users?per_page=5'
    // const fetchPromise = fetch(url);
    
    // fetchPromise
    //     .then( response => response.json() )
    //     .then( console.log )
    //     .catch( error => 
    //         console.error('error',error)
    //     )

    // imlemento el manejo de errors
    // fetchPromise
    //     .then( manejaErrores )
    //     .then( response => response.json() )
    //     .then( console.log )
    //     .catch( error => 
    //         console.warn('error', error)
    //     )

    const err = (error: AjaxError) => {
        console.warn('error', error.message);
        // hay que retornar siempre un observable
        return of([]); 
    }

    ajax(url)
    .pipe(
        pluck('response'),
        catchError( err )
    )
    .subscribe(
        resp => {
            console.log('usuarios:', resp)
        }
    )
