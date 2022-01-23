
import { from, Observer, of, range, Subject, fromEvent } from 'rxjs';

import { filter, map, mapTo, pluck, takeUntil } from 'rxjs/operators'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

// const observable = of(mynumber);
// const observable = ofObjectChanges(myarray);

range(1,10).pipe(
    filter( (num,i) => {
        console.log('index', i);
        return num % 2 === 1;
    })
)
//subscribe( console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Array<Personaje> = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'jocker'
    }
]


// from(personajes).pipe(
//     filter( (personaje:any) => personaje.tipo === 'heroe')
// )
// .subscribe(console.log)


const keyup$ =  fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( (event:KeyboardEvent) => event.code),
    filter( key => key === 'Enter')
)

keyup$.subscribe( console.log )