
import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

const intervalos$ = new Observable<number> ( subscriber => {

    let i = 1;
    // crear contador
    // creamos una referencia para poder cancelar el intervalo en el futuro
    const interval = setInterval( () => {
        subscriber.next(i++);
        console.log(i)
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    // esto se va a ejecutar cuando se ejecuta la funcion unsubscribe
    return () => {
        clearTimeout(interval);
        console.log('intervalo destruido')
    }
})


const subscription1 = intervalos$.subscribe( observer );
// de esta manera siempre crea una nueva instancia
const subscription2 = intervalos$.subscribe( observer );
const subscription3 = intervalos$.subscribe( observer );

// de esta manera usa la misna instancia
subscription1.add(subscription2)
subscription1.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('completado timeout')
}, 3000);





