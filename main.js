var input=document.querySelector('.input');
var items=Array.from(document.querySelectorAll('.item'));
items.forEach(function(bnt){
    bnt.addEventListener('click',function(){
        if(input.innerHTML=='0')
        input.innerHTML='';
        if(bnt.innerHTML=='AC')
        input.innerHTML='0';
        else
            if(bnt.innerHTML=='DEL'){
                var arrtext=Array.from(input.innerHTML);
                arrtext.splice(arrtext.length-1,1);
                if(arrtext.length!=0)
                input.innerHTML=arrtext.join('');
                else input.innerHTML= '0';
            }
        else
            if(bnt.innerHTML=='%'){
                input.innerHTML=input.innerHTML/100;
            }
        else
            if(bnt.innerHTML=='='){
                input.innerHTML=eval(input.innerHTML);
            }
        else
            input.innerHTML+=bnt.innerHTML;
    })
})