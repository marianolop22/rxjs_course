
import { fromEvent, Observer, range} from 'rxjs'

import { map, mapTo, pluck } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}


// range(1,5)
//     .pipe( 
//         map<number,number>( val => val * 10)
//     )
//     .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$
    .pipe( map(
        (event:KeyboardEvent) => event.code)
    )
    

const keyupPluck$ = keyup$
    .pipe(
        // pluck('key') //esto es para una propiedad
        pluck('target','baseURI') // esto es para una propiedad que está dentro de otra
    )


const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);


keyup$.subscribe(console.log)
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));
keyupMapTo$.subscribe( code => console.log('mapto', code) )