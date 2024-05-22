const bars=document.querySelector(`.bars_b`)
const ul1=document.querySelector(`.ul1`)
const xs=document.querySelector(`.xs`)
const plus=document.querySelector(`.plus`)
const ul7=document.querySelector(`.ul7`)
const text1=document.querySelector(`.superior_items_text`)
const absolyut=document.querySelector(`.absolyut`)
const ty=document.querySelector(`.ty`)
const cb=document.querySelector(`.cb`)
const ti=document.querySelector(`.ti`)
const cf=document.querySelector(`.cf`)
const to=document.querySelector(`.to`)
const cg=document.querySelector(`.cg`)
const  aq=document.querySelector(`.aq`)
const  az=document.querySelector(`.az`)
const  pl=document.querySelector(`.pl`)
const  pele=document.querySelector(`.pele`)
const  af=document.querySelector(`.af`)
const  ab=document.querySelector(`.ab`)
const  plu=document.querySelector(`.plu`)
const  yut=document.querySelector(`.yut`)
const  an=document.querySelector(`.an`)




yut.addEventListener(`click`,()=>{
    if(an.classList.contains(`bor`)){
        an.classList.remove(`bor`)
        yut.src=`./imges/plus.svg`
    }else{
        an.classList.add(`bor`)
        yut.src=`./imges/minus.svg`
    }
})
absolyut.addEventListener(`click`,()=>{
    if(aq.classList.contains(`bor`)){
        aq.classList.remove(`bor`)
        absolyut.src=`./imges/plus.svg`
    }else{
        aq.classList.add(`bor`)
        absolyut.src=`./imges/minus.svg`
    }
})

pl.addEventListener(`click`,()=>{
    if(az.classList.contains(`bor`)){
        az.classList.remove(`bor`)
        pl.src=`./imges/plus.svg`
    }else{
        az.classList.add(`bor`)
        pl.src=`./imges/minus.svg`
    }
})
pele.addEventListener(`click`,()=>{
    if(af.classList.contains(`bor`)){
        af.classList.remove(`bor`)
        pele.src=`./imges/plus.svg`
    }else{
        af.classList.add(`bor`)
        pele.src=`./imges/minus.svg`
    }
})
plu.addEventListener(`click`,()=>{
    if(ab.classList.contains(`bor`)){
        ab.classList.remove(`bor`)
        plu.src=`./imges/plus.svg`
    }else{
        ab.classList.add(`bor`)
        plu.src=`./imges/minus.svg`
    }
})


bars.addEventListener(`click`,function(){
    if(  ul1.classList.contains(`display`)){
        ul1.classList.remove(`none`)
    }
    else{
      
        ul1.classList.add(`display`)
    }
})
xs.addEventListener(`click`,function(){

            ul1.classList.remove(`display`)
})


plus.addEventListener(`click`,()=>{
    if(ul7.classList.contains(`display`)){
        ul7.classList.remove(`display`)
        plus.src=`./imges/plus.svg`
    }
    else{
        ul7.classList.add(`display`)
        plus.src=`./imges/minus.svg`
        
    }
})


ty.addEventListener(`click`,()=>{
    if(cb.classList.contains(`display`)){
        cb.classList.remove(`display`)
        ty.src=`./imges/plus.svg`
    }
    else{
        cb.classList.add(`display`)
        ty.src=`./imges/minus.svg`
        
    }
})
ti.addEventListener(`click`,()=>{
    if(cf.classList.contains(`display`)){
        cf.classList.remove(`display`)
        ti.src=`./imges/plus.svg`
    }
    else{
        cf.classList.add(`display`)
        ti.src=`./imges/minus.svg`
        
    }
})
to.addEventListener(`click`,()=>{
    if(cg.classList.contains(`display`)){
        cg.classList.remove(`display`)
        to.src=`./imges/plus.svg`
    }
    else{
        cg.classList.add(`display`)
        to.src=`./imges/minus.svg`
        
    }
})


