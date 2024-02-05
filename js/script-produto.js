const btnTop=document.querySelector('.btn-top')

window.addEventListener('scroll',()=>{
       
    if(window.scrollY > 200)
        btnTop.style.display='block'
    else
        btnTop.style.display='none'
    
        
})

   btnTop.addEventListener('click',()=>{
        window.scrollTo({
                top:0,
                behavior:'smooth'
        })
})




    
