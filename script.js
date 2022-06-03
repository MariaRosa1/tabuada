function contar(){
    let numero = document.querySelector('#num')
    let res = document.querySelector('#res')
    let rconta

   if(numero.value.length == 0){
       alert('Por favor, digite um número!')
   } else{
    res.innerHTML = 'Contando:'
    let n = Number(numero.value)
    for(i=0;i<=10;i++){
        rconta = n*i
        res.innerHTML+= `<li> ${i} x ${n} = ${rconta} </li>`
        res.style.listStyle ='none' 
    }
   }
}
