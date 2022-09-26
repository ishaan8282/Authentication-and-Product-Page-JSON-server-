
import React from 'react';
import {useState,useEffect} from "react"
import { Link, useSearchParams } from 'react-router-dom';

const getCurrentPageurl = (value) => {
   value = Number(value)
    if(typeof value===Number && value<0)
    {
        value = 1;
    }
    if(!value)
    {
        value = 1
    }
    return value;
}


// function apiUrl(orderBy,url){
//     if(orderBy) {

//     }
// }

function Product() {

    let [searchParams, setsearchParams] = useSearchParams()

    const [data, setData] = useState([])

    const [page, setPage] = useState(getCurrentPageurl(searchParams.get("page")) || 1)

    const [totalCount, settotalCount] = useState(0)
    
    const [orderBy, setOrderBy] = useState("")
    
    const limit = 2;

    const sort = "price";

    // useEffect (() => {
      
    // })
    
    useEffect(() => {

        let apiUrl;

        if(orderBy) {
            apiUrl = `http://localhost:8080/products?_limit=${limit}_&_page=${page}&_sort=${sort}&_order=${orderBy}` 
        }
        else
        {
             apiUrl = `http://localhost:8080/products?_limit=${limit}_&_page=${page}`
        }

        fetch(apiUrl)
        .then((res) => {
            settotalCount(Number (res.headers.get("x-total-count")))
            return res.json()} )
        .then (res => {
            setData(res)
            console.log(res)
        })
        
    },[page,orderBy])


    useEffect(()=>{
        
       let paramObj = {page};

       if(orderBy){
        paramObj.orderBy = orderBy;
       }

       setsearchParams(paramObj)
    },[page,orderBy])

  return (
    <div>
        <button onClick={()=> setOrderBy("asc")}> Order by Price-ASC</button>
        <button onClick={()=> setOrderBy("desc")}> Order by Price-DESC</button>
        <button onClick={()=> setOrderBy("")}> Order by Price-RESET</button>
       <div style={{display:"grid", gridTemplateColumns :"repeat(2,1fr)", margin:"auto", gap:"10px", padding:"10px" }}>
            {
               data?.map((prod) => (
                <div style={{border:"2px solid", padding:"20px", boxSizing:"border-box"}} key={prod.id} >
                   <img  style={{width:"100px"}} src={prod.image} alt="prod-img"/> <br />
                     <h2>Price : {prod.price}</h2> 
                     <h4>{prod.title}</h4> 
                     <Link to={`/products/${prod.id}`} > More details </Link>
                    </div>
               ))
            }
        
        </div>

        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button>{page}</button>
        <button disabled={page===Math.ceil(totalCount/limit)} onClick={()=>setPage(page+1)}>Next</button>

    </div>
  )
}

export default Product