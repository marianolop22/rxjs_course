
import {asyncScheduler, observable, Observer, range, interval, timer, async} from 'rxjs'

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}


// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('hola mundo')
const saludar2 = (nombre) => console.log(`hola ${nombre}`)
const saludar3 = ({nombre, apellido}) => console.log(`hola ${nombre} ${apellido}`)

// asyncScheduler.schedule( saludar, 2000);
// asyncScheduler.schedule( saludar2, 2000, 'Mariano');
// asyncScheduler.schedule( saludar3, 2000, {'nombre':'Mariano', 'apellido':'Lopez'});

const subs = asyncScheduler.schedule( function(state){
    console.log('state', state);
    
    this.schedule(++state,1000)

}, 3000, 0)

// setTimeout(() => {
//     subs.unsubscribe()
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 )
