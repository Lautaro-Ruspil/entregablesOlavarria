document.addEventListener('DOMContentLoaded' , () => {
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let btn = document.getElementById('toogleButton');
    btn.addEventListener('click' , () => {
        if(div1.contains(btn)){
            div2.appendChild(btn);
            div1.classList.add('hidden');
            div2.classList.remove('hidden');
        }else{
            div1.appendChild(btn);
            div2.classList.add('hidden');
            div1.classList.remove('hidden');
        }
    })
});