
import { from, Observer, of, range, Subject, fromEvent } from 'rxjs';

import { tap, map } from 'rxjs/operators'
import { textSpanOverlap } from 'typescript';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}



const texto = document.createElement('div')

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae fringilla nisi. Integer tempor rhoncus dolor, vel ultrices felis. Morbi felis lectus, egestas sit amet varius vel, tempus eget nulla. Cras pharetra erat sem, a congue ligula ornare id. In sem diam, convallis eget massa sed, viverra tristique nunc. Suspendisse nec diam porttitor, fermentum leo eu, finibus nibh. Phasellus eget accumsan tortor. Maecenas vitae dui erat. Vestibulum tincidunt egestas neque ac fermentum. In a bibendum sapien. Aliquam porta lacus sed ligula convallis, non posuere justo elementum. Nullam id auctor nisl. Suspendisse quis nisl ornare, imperdiet sem ac, suscipit massa. Praesent pharetra augue molestie, porttitor tortor vitae, viverra arcu.
<br/><br/>
Phasellus lobortis et sapien id dapibus. Maecenas tristique, neque nec lobortis eleifend, erat augue convallis turpis, nec vestibulum ex elit ut lectus. Aliquam rutrum felis varius, congue nulla nec, auctor metus. Quisque dictum sollicitudin dui, vel venenatis justo placerat id. Vestibulum id est vitae leo vulputate congue sit amet ac sem. Proin at sollicitudin sapien. Nullam in justo ac risus accumsan sodales. Morbi sollicitudin felis eu nisi facilisis, vitae aliquam dui commodo. Fusce aliquet viverra turpis, ut imperdiet diam tempus at. Vivamus eleifend enim ac felis ultrices, quis gravida orci lacinia. Praesent lorem felis, placerat quis metus non, porttitor volutpat quam. In ac metus massa.
<br/><br/>
Curabitur scelerisque ac nisi sit amet scelerisque. Cras convallis, urna at eleifend ultricies, mi ligula pharetra tortor, non dignissim dui libero vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim feugiat ipsum hendrerit rutrum. Donec vitae tincidunt tellus, id aliquet neque. Proin vehicula ornare nisl, quis porta tellus volutpat sed. Aliquam erat volutpat. Suspendisse ante libero, ullamcorper quis tellus quis, mollis hendrerit massa. Fusce cursus condimentum velit, vel luctus ex gravida vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque interdum dui orci. Morbi dictum tortor eros, quis luctus tellus suscipit vitae. Donec ultrices sapien orci. Nullam pharetra ullamcorper justo et accumsan. Nulla lobortis ipsum eu odio cursus, sit amet malesuada enim vehicula. Fusce at convallis quam.
<br/><br/>
Duis sit amet interdum tortor. Sed vitae libero sit amet leo auctor malesuada vitae at justo. Nunc eu nisl ante. Donec vel ligula quis ligula auctor tempus placerat sed libero. Proin erat nisi, luctus quis vehicula ut, pulvinar lacinia lorem. In hac habitasse platea dictumst. Morbi in eros congue, condimentum nisl quis, molestie ligula. Aliquam iaculis mollis eros sed consectetur. Mauris aliquet lacinia vulputate. Integer augue nisl, molestie ac ipsum sed, tempus lacinia sapien. Maecenas id consequat nunc. Quisque vel nisi nec neque ultrices volutpat ac a turpis.
<br/><br/>
Nunc velit ligula, sollicitudin ac enim sit amet, pulvinar dictum sem. Aliquam id ultrices urna, in pretium justo. Vestibulum aliquet, ex vel sollicitudin ultricies, velit orci tristique mi, id posuere elit lorem vitae eros. Vestibulum dignissim velit vitae urna pharetra eleifend. Nullam lobortis, nisi at auctor vestibulum, eros libero iaculis neque, in vestibulum purus nibh sit amet elit. Sed nulla nunc, consequat quis elementum a, ornare ac libero. Aenean nec consequat nisi. Proin porta lobortis sapien, in placerat mi tristique ac. Quisque euismod, nisi ac finibus cursus, sapien nibh placerat leo, a suscipit urna ipsum a metus. Nam nec mattis magna. Nulla magna tellus, ultricies sit amet nisi et, lacinia imperdiet mi. Quisque eget convallis purus. Nulla lacinia, felis in semper vulputate, magna neque pharetra elit, eu ultricies lectus arcu et sem.
`

const body = document.querySelector('body')
body.append(texto)

const progresssBar = document.createElement('div')

progresssBar.setAttribute('class', 'progress-bar')

body.append(progresssBar);

// funciona que haga el calculo

const calcularPorcentajeScroll = (event)=> {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = event.target.documentElement;

        const percentaje = (scrollTop / (scrollHeight-clientHeight)) * 100;
        return percentaje;

        // console.log(scrollTop, scrollHeight, clientHeight);
    }

// streams
const scroll$ = fromEvent( document, 'scroll')
// scroll$.subscribe( console.log)

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll),
    tap(console.log)

)


progress$.subscribe(
    porcentaje => {
        progresssBar.style.width = `${ porcentaje}%`
        // console.log(porcentaje);
    }
)