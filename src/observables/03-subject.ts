
import {Observable, Observer, Subject} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}


const intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval( ()=> {
        subs.next(Math.random())
    },1500);

    return () => {
        clearInterval(intervalId);
        console.log('elimina el intervalo')
    }

});


/**el subject
 * 1. casteo multiple
 * 2. tambien es un observer
 * 3. se pueden manejar next, error, complete
 * 
 */

const subject$ = new Subject()

const subscription = intervalo$.subscribe(subject$);




// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd ) );
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd ) );


// al hacerlo con subject mantiene la misma instancia por lo tanto comparte los datos
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    
    // al poner un subject y emitir, esto  se le llama un hot observable
    subject$.next(10)
    subject$.complete()

    // subs2.unsubscribe()
    subscription.unsubscribe()

}, 3500);








