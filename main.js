let data = {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}};

/* function getData(){

    setTimeout(
        ()=>{return data}
        , 5000)
} */
/* data = null */
/* function getData(){
    return new Promise((resolve, reject)=>{
        if(data==null){
            reject(new Error("Data is null"))
        }
        let seconds = Math.ceil(Math.random()*10000);
        setTimeout(()=>resolve(data), seconds)
    });
} */

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then((response)=>{
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }
        ).catch((error)=> console.log("Problema con el json", error))
    })
    .catch((err)=>console.log("Existio un problema con la solicitud", err));

}

function createCards(productos){
    productos.forEach(element => {
        
        let cardData = document.getElementById("cardData");
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card col" style="width: 18rem;">
                                 <img src="${element.image}">
                                 <div class="card-body">
                                      <h5 class="card-title"> ${element.brand} </h5>
                                      <p class="card-text">${element.description} </p>
                                      <p class="card-text">$${element.price}</p>
                                 </div>  
                                 <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.brand}">Ver detalles</button>
                              </div>  
                              
                              <div class="modal fade" id="${element.brand}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${element.name}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p> ${element.description} </p>
                                        <p> Rating: ${element.rating}  </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                              `
        cardData.appendChild(newCard);
    });
}

getData()



/* async function fetchingData(){
    
    try
    {const response = await getData();
    console.log("Promesa cumplida", response)
    let divData = document.getElementById("divData");
    divData.innerHTML = response.title + "<br/>" + response.description;
    console.log(response);
    } catch(e){

    }
}

fetchingData()

/* getData()
.then((response)=>{
    console.log("Promesa cumplida", response)
    let divData = document.getElementById("divData");
    divData.innerHTML = response.title + "<br/>" + response.description;
})
.catch((err)=>console.log("Promesa rechazada", err)) */ 