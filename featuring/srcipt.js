let produts = []

const getvalue = (id) => {
    return document.getElementById(id).value;
}

let handleAdd = (event)=>{
    event.preventDefault()
    let product ={
        name : getvalue("p_name"),
        price : getvalue("price"),
        image : getvalue("image"),
        category : getvalue("category")
    }
    produts.push(product)
    localStorage.setItem('produts', JSON.stringify(product))
}

document.getElementById('addProducts').addEventListener('click', handleAdd);  