import React, {useState} from 'react'
import CardView from './cardView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

export default function Store() {
    const [icon, setIcon] = useState(true);

    const onSwitchTable = () => {
        setIcon(icon => !icon)
    }

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

      const  Product  = () => {
        const isTable = icon
        if (!isTable) {
          return   <ListView products={products} />;
        }
        return <CardView products={products} />;
      }

  
  return (
    <div>
        <IconSwitch icon={icon} onSwitch={onSwitchTable}/>
        <Product />
    </div>
  )
}
