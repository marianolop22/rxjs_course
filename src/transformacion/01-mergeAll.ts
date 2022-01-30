
import { from, Observer, of, range, Subject, fromEvent, interval, pipe, Observable, asyncScheduler, map, catchError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { debounceTime, mergeAll, pluck } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsers } from '../interfaces/github-users.interface';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ', valor),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

const manejaError = (resp: AjaxError) => {
    console.log('error', resp.message);
    return of({
        ok: false,
        usuarios:[]
    })
} 





const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

//helpers
const mostrarUsuarios = (usuarios: Array<GithubUser>) => {

    console.log(usuarios);
    orderList.innerHTML = ''
    for (const usuario of usuarios) {

        const li = document.createElement('li')
        const img = document.createElement('img')

        img.src = usuario.avatar_url
        const anchor = document.createElement('a')
        anchor.href = usuario.html_url
        anchor.text = 'Ver Pagina'
        anchor.target = '_blank'

        li.append(img)
        li.append(usuario.login + '')
        li.append(anchor)

        orderList.append(li)

        
    }
}

//streams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')


// mergeall devuelve ya un observable para poder procesarlo en el subscribe
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>( event => event.target['value']),
    map<string, Observable<GithubUsers>>( texto => {

        return ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    }),
    mergeAll<Observable<GithubUsers>>(),
    map<GithubUsers, Array<GithubUser>>(resp => resp.items)
).subscribe(
    (users: Array<GithubUser>) => {
        console.log(users[0].score);
        mostrarUsuarios(users)
    }
)

