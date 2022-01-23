
import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('complete')
}
const obs$ = new Observable<string>( subs => {

    subs.next('hola')
    subs.next('mundo')

    subs.next('hola')
    subs.next('mundo')

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Mariano'
    
    subs.complete()
    
    //estos no se van a emitir
    subs.next('hola')
    subs.next('mundo')
});


// obs$.subscribe ( resp => {
//     console.log(resp)
// });

// obs$.subscribe ({
//     next: (valor) => console.log('next: ', valor),
//     error: (error) => console.warn('error:', error),
//     complete: () => console.info('complete')
// });

// obs$.subscribe(
//     (valor) => console.log('next: ', valor),
//     (error) => console.warn('error:', error),
//     () => console.info('complete')
// )

// usando una variable observer
obs$.subscribe (observer);


