
import { from, Observer, of, range, Subject, fromEvent } from 'rxjs';

import { tap, map } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}



const numero$ = range(1,5)

// sirve para poner un observer y esto te permite ejecutar funciones al final de todo


numero$
.pipe(
    tap( x => console.log('antes', x)),
    map( val => val * 10 ),
    tap ({
        next: valor => console.log('desvues', valor),
        complete: () => console.log('se terminó todo')
    })

)
.subscribe( val => console.log('subs', val))

