const add = document.querySelector('.fa-plus');
const ul = document.querySelector('ul');
const input = document.querySelector('input');

add.addEventListener('click',()=>{
    if(input.value == ""){
        alert("Please Enter Text")
    }
    else{
    const li = document.createElement('li');
    const p = document.createElement('p');
    const span = document.createElement('span');
    li.append(p);
    li.append(span);
    ul.appendChild(li);
    span.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';
    p.innerText = input.value;
    input.value = "";
    }
})

ul.addEventListener('click',(e)=>{
    if(e.target.tagName == 'I'){
    e.target.parentElement.parentElement.remove();
    }
})