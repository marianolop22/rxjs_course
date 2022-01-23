
import {asyncScheduler, Observer, of, range} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// const src$ = of(1,2,3,4,5);
const src$ = range(1,5, asyncScheduler)

console.log('inicio')
src$.subscribe( console.log);
console.log('fin')





