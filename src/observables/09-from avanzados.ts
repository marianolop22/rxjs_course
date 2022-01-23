
import {observable, Observer, from, of} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

/**
 * of = toma argumentos y genera una secuencia de valores
 * from = crea un observable de array, promise, iterable, observable
 */

// const source$ = from ([1,2,3,4,5])
// const source$ = of (...[1,2,3,4,5])

// const source$ = from ('Mariano')

// const source$ = from(fetch("https://api.github.com/users/klerith"))

// source$.subscribe( async(resp) => {
//     console.log(resp);

//     const response = await resp.json()
//     console.log(response)
// })

// source$.subscribe(observer)


const miGenerador = function*() { // estp es una funcion generadora
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer)
