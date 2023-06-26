let input=document.querySelector('input');
let buttons=document.querySelectorAll('button');

let string="";
buttons.forEach(button=>{
    button.addEventListener("click",ev=>{
            if(ev.target.innerHTML=='=')
            {
              string=eval(string);
              input.value=string;
            }
            else if(ev.target.innerHTML=='AC')
            {
              string="";
              input.value="0";
            }
            else if(ev.target.innerHTML=='DEL')
            {
              string=string.substring(0,string.length-1);
              input.value=string;
            }
            else{
            string=string+ev.target.innerHTML;
            input.value=string;}
    })
})



