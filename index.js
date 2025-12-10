async function getData()
{
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json()
    fetchData(data)
   //console.log(data)
}
function fetchData(data)
{
    let container=document.getElementById("main")
    data.forEach(arr=>
    {
        let child=document.createElement("child")
        child.innerHTML=`
        <h1>Id :${arr.id}</h1>
        <p>Title:${arr.title}</p>
        <img src=${arr.image}></img>
        <h2>Price : ${arr.price}</h2>
        `
        child.className="child1"
        container.appendChild(child)
    }
    )
}
getData()