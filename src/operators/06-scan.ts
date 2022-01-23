
import { from, Observer, of, range, Subject, fromEvent, interval, pipe } from 'rxjs';

import { tap, map, take, reduce, scan } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// scan es igual al reduce, salvo que devuelve valores a medida que los procesa


const numeros = [1,2,3,4,5]

const totalAcumulador = (acc, cur) => acc + cur;

// reduce
// from(numeros)
// .pipe(
//     reduce(totalAcumulador)
// )
// .subscribe(console.log)

// // scan
// from(numeros)
// .pipe(
//     scan(totalAcumulador,0)
// )
// .subscribe(console.log)

// Redux cada vez que se modifica el estado de mi state, imprimo algo
interface User {
    id?:string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: User[] = [
    {id: 'mariano', autenticado: false, token: null},
    {id: 'mariano', autenticado: true, token: 'abc'},
    {id: 'mariano', autenticado: true, token: 'abc123'},
]

const state$ = from( user ).pipe(
    scan<User, User>( (acc,cur)=> {
        return {...acc, ...cur}
    }, {edad: 33})
)

const id$ = state$.pipe(
    map( state => state.id )
)

id$.subscribe( console.log);