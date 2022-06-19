import React from 'react'

function ListView(props) {
  console.log(props)
  return (
    <div className='items'>
        {props.products.map(item => {
               return(  
                    <div className='item' key={item.img}>
                      <div className='imgItem'><img src={item.img}/></div>
                      <div className='nameItem'>{item.name}</div>
                      <div className='colorItem'>{item.color}</div>
                      <div className='priceItem'>{item.price + " P"}</div>
                      <button className='butItem'>{"ADD TO CART"}</button>
                    </div>
               )

        })}

    </div>
  )
}



export default ListView
