
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

//reduce, igual que en js comun, pero retorna cuando el observable está completo

const numbers = [1,2,3,4,5]

const totalReducer = ( acumulator: number, currentValue: number) => {
    return acumulator + currentValue;
}

const total = numbers.reduce(totalReducer, 0);

// console.log(total);


interval(1000)
.pipe(
    take(6),
    reduce( totalReducer, 5 )
)
.subscribe({
    next: val => console.log('next',val),
    complete: () => console.log('complete')

})



