const loadPhones = async(searchTex,datalimit) =>{
    const url=` https://openapi.programming-hero.com/api/phones?search=${searchTex}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data,datalimit)
   

}




const displayPhones = (phone,datalimit) =>{
const container = document.getElementById('phone-container');



// jaga faka korar system
container.textContent='';








const showAll = document.getElementById('btn-show-all');
if(datalimit && phone.length>10){

    phone=phone.slice(0,10);

    showAll.classList.remove('d-none')
}
else{
    showAll.classList.add('d-none')
}









   //no dispaly phone   
   const nophone = document.getElementById('no-phone-message');  
      if(phone.length===0){
       nophone.classList.remove("d-none");

      }
      else {
        nophone.classList.add("d-none");
      }







    // display all phone 
     phone.forEach(phone =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadphoneDetails('${phone.slug}')" href="#" class="btn btn-primary">Shoe Detalis</button>
        </div>
      </div>
        `;

        container.appendChild(div);
     });
    //  stop loder
    toggleSpiner(false)
    // console.log(phone)
}





const processSearch =(datalimit)=>{
    toggleSpiner(true)
const searchfield = document.getElementById('search-field');
const searchText = searchfield.value;
loadPhones(searchText,datalimit)
}




document.getElementById('btn-search').addEventListener('click',function(){
// start lodre
// toggleSpiner(true)
// const searchfield = document.getElementById('search-field');
// const searchText = searchfield.value;
// loadPhones(searchText)
processSearch(10)
})


// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress',function(e){
    // console.log(e.key)
if(e.key === 'Enter'){
    processSearch(10)
}
})





const toggleSpiner = isloding =>{
    const loderSection = document.getElementById('loder');
    if(isloding){
        loderSection.classList.remove('d-none')
    }
    else{
        loderSection.classList.add('d-none')
    }
}



// this is not a best way


document.getElementById('btn-show-all').addEventListener('click',function(){
processSearch()
})







const loadphoneDetails =async id =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
}





// loadPhones()










// https://openapi.programming-hero.com/api/phones?search=iphone