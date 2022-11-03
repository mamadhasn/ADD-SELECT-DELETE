const product=document.getElementById("product")
const price=document.getElementById("price")
const subconteaner=document.getElementById("subconteaner")
const submit=document.getElementById("submit")
const select_toremove=document.getElementById("select-ALL_remove")
const remove_all_select=document.getElementById("remove-all")
let myarry=[];
submit.addEventListener("click",e=>{
      myarry.push(
              {
                name:product.value,
                price:price.value,    
              }
      )
      document.getElementById("subconteaner").innerHTML="";
     myarry.forEach(e=>{
     const elemnt=document.createElement("p")
     const span=document.createElement("button")
     const cheky=document.createElement("input")
     const linky=document.createElement("a")
     cheky.setAttribute("type","checkbox")
        span.textContent="x"
         linky.setAttribute("href","www.3school.ir")
     elemnt.append(cheky)
     elemnt.append(linky)
      linky.innerHTML+=` ${e.name} is ${e.price}$ `
      elemnt.append(span)
     document.getElementById("subconteaner").append(elemnt)

 


     span.addEventListener("click",e=>{
       elemnt.remove()
   })


   
select_toremove.addEventListener("change",e=>{
   if(e.target.checked){
    cheky.checked=true
   }else{
    cheky.checked=false
   }
})
remove_all_select.addEventListener("click",e=>{
    if(cheky.checked){
      elemnt.remove()
      select_toremove.checked=false
    }
    

})

     })
  product.value="";
   price.value="";


 

})
