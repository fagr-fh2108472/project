const toyURL = 'JSON/toys.json'; 

const categories =[... new Set(toyURL.map((item)=>{return item}))]

document.getElementById('searchbox').addEventListener('keyup',(e)=>{
    const searchData=e.target.value.toLowerCase();
    const filterData=categories.filter((item)=>{
        return (
            item.product_name.toLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem=(items)=>{
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{img , product_name,id , price}=item
        return (
            `<div class=box>  
            <div class='img-box'>
            <img class='images' src=${images}></img>
        </div> 
        <div class='bottom'>
            <p>${product_name}</p>
            <h2>$ ${price}.00</h2>
            <button>Add to cart</button>
            </div>
        </div> `
            
        )
    }).join('')
};
displayItem(categories);

