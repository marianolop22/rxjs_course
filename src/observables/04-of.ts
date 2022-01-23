
import {Observable, Observer, of} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('inicio')

obs$.subscribe(
    next => console.log('next', next),
    null,
    ()=> console.log('terminamos la secuencia')
    
    )
    
console.log('fin')






