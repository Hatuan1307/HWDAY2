let changeColor =document.querySelectorAll('.box')
changeColor.forEach(box =>{
    box.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.style.backgroundColor = 'rgb('+ Math.round(Math.random()*255)+','+
        Math.round(Math.random()*255) +',' + Math.round(Math.random()*255)+ ')';
    })
})

