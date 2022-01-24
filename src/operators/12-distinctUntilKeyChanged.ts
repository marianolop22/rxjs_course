
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable } from 'rxjs';

import { tap, map, take, reduce, scan, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators'
import { StringLiteralLike } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// distinctUntilKeyChanged emite basandose en una key del objeto

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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log)




