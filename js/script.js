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
         emailAddresses: [],
         apiUri : 'https://flynn.boolean.careers/exercises/api/random/mail',
         emailAddressNumber : 10,
         errorMessage : '',
         isLoading : false,
        }
    },
    methods : {

       getEmailList(){
           for(let i = 0 ; i < this.emailAddressNumber ; i++){
               this.isLoading = true;
               axios.get(this.apiUri).then( response =>{
              this.emailAddresses.push(response.data.response)
              
            }).catch(error =>{
                this.errorMessage = error.message;
            }).then(()=>{
                this.isLoading = false;
            });
        }
        
    }
},
mounted(){
    this.getEmailList();
    }
})

app.mount('#root')