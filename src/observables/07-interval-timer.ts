
import {observable, Observer, range, interval, timer} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

const hoyEn5 = new Date()
hoyEn5.setSeconds ( hoyEn5.getSeconds() + 5 )

const interval$ = interval(1000);
// const timer$ = timer(2000)
// const timer$ = timer(2000, 1000)  // empeza despues de 2 segundos y corre cada 1 segundo
const timer$ = timer( hoyEn5) // con esto puedo programar en qué momento quiero que se ejecute



console.log('inicio')
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('fin')





