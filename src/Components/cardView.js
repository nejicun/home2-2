import React from 'react'

function CardView(props) {
  console.log(props)
  const styleImg = {
    background: 'url(' + Image + ')',
  }
  return (
    <div className='itemsCards'>
        {props.products.map(item => {
               return(  
                    <div className='itemCard' key={item.img} style={{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'contain'}}>
                      <div className='nameItemCard'>{item.name}</div>
                      <div className='colorItemCard'>{item.color}</div>
                      <div className='bottomCard'>
                        <div className='priceItemCard'>{item.price + " P"}</div>
                        <button className='butItemCard'>{"ADD TO CART"}</button>
                      </div>
                    </div>
               )

        })}

    </div>
  )
}



export default CardView
