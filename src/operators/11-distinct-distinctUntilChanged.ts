
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged } from 'rxjs/operators'
import { StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// distinct deja pasar los valores que no se hayan pasado anteriormente
// distinctUntilChanged emite valores pero solo filtra cuando los contiguos son los mismos

const numeros$ = of<any>(1,'1',1,3,3,3,2,2,4,4,5,3,'1')

numeros$
    .pipe(
        // distinct() // usa el operador === para hacer la comparación, si mando un string en el medio, lo toma como distinto
        distinctUntilChanged() // usa el operador === para hacer la comparación, si mando un string en el medio, lo toma como distinto
    )
    .subscribe( console.log)

interface Personaje {
    nombre: string;
}

const personajes: Array<Personaje> = [
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Dr Willy'},
    {nombre: 'X'},
    {nombre: 'X'},
    {nombre: 'Zero'}
]

from( personajes)
    .pipe(
        // distinct( p => p.nombre ) // para trabajar con objetos
        distinctUntilChanged( (ant, act)=> ant.nombre === act.nombre ) // para trabajar con objetos
    )
    .subscribe(console.log)




