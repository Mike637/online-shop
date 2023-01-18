import React  from 'react'
import  styles from "./header.module.scss"
import cart from "./images/cart.png"

console.log(cart)
console.log("Hello world")

const Header = () => {
return (
   <header className={styles.header}>
   <div className = {styles.header__container}>
<div className = {styles.Logo}>
Online-shop
</div>
<div className = {styles.searchPanel}>
<form action="">
    <input type="text" />
</form>
</div>

<div className={styles.cart}>
<button>
<img src={cart}/>
</button>
</div>

</div>
   </header>
)
}

export default Header