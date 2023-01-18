// CHECK JS LINK
console.log('JS OK');
console.log('vue ok', Vue)

//! TESTO

/**
 Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Super Bonus
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte? :sorriso:

 */

const app = Vue.createApp({
    name: 'E-mail list',
    data(){
        return {

        }
    }
})

app.mount('#root')