
import {Observable, Observer, fromEvent} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}


// Eventos del DOM
const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');


src1$.subscribe( (event:MouseEvent) => {
    console.log(event.x)
    console.log(event.y)
});
src2$.subscribe((event:KeyboardEvent) => {
    console.log(event.key)


});



