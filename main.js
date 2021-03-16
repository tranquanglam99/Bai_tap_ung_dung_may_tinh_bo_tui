var input=document.querySelector('.input');
var items=Array.from(document.querySelectorAll('.item'));
items.forEach(function(data) {
    data.addEventListener('click',function() {
        if(input.innerHTML == '0')
        input.innerHTML = '';
        if(input.innerHTML == '00')
        input.innerHTML = '00';
        if(data.innerHTML == 'AC')
        input.innerHTML = '0';
        else
            if(data.innerHTML == 'DEL') {
                var arrtext = Array.from(input.innerHTML);
                arrtext.splice(-1,1);
                if(arrtext.length != 0)
                input.innerHTML = arrtext.join('');
                else input.innerHTML = '0';
            }
        else
            if(data.innerHTML =='%') {
                input.innerHTML /= 100;
            }
        else
            if(data.innerHTML == '√') {
                input.innerHTML = Math.sqrt(input.innerHTML)
            }
        else
            if(data.innerHTML == 'x <sup>2</sup>') {
                let x = eval(input.innerHTML);
                input.innerHTML = x ** 2 
            }
        else
            if(data.innerHTML == 'x <sup>3</sup>') {
                let x = eval(input.innerHTML);
                input.innerHTML = x ** 3 
            }     
        else
            if(data.innerHTML == '=') {
                input.innerHTML = eval(input.innerHTML);
            }
        else
            input.innerHTML += data.innerHTML;
    })
})