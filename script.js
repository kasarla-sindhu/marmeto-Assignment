let titleEl=document.getElementById("title")
let vendorEl=document.getElementById("vendor")
let descriptionEl=document.getElementById("description")



function createCardContainer(productdetails){
    const {title,vendor,description}=productdetails

    titleEl.textContent=title
    vendorEl.textContent=vendor

    const tempElement = document.createElement('div');
    tempElement.innerHTML = description;

    const pContent = tempElement.querySelector('p').innerHTML;

    descriptionEl.textContent=pContent


}


function getProductData(){
    fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let {product}=data
    console.log(product)
    createCardContainer(product)
})

}

getProductData()