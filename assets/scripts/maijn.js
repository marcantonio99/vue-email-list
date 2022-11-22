var app = new Vue({
    el: '#app',
       data: {
    
          randomMail: '',
          mailArray: [],
    
       },
       mounted() {
    
       },
       created() {
    
       },
       beforeUpdate() {
    
       },
       methods: {
    
          generaMail(){
    
             for(let i = 0; i < 10; i++){
    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                   let randomMail = response.data.response; 
                   console.log("response.data.response " + response.data.response);

                   this.randomMail = randomMail;

                   console.log("this.randomMail " + this.randomMail); 

                   this.mailArray.push(this.randomMail);
                   
                })
    
             }
    
          },

        
    
       }
    })