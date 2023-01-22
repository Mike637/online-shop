import React  from 'react'
import  styles from "./header.module.scss"
import cart from "./images/cart.png"


const Header = () => {
return (
   <header className={styles.header}>
   <div className = {styles.header__container}>
<div className = {styles.header__logo}>
Online-shop
</div>
<div className = {styles.header__searchPanel}>
<form action="">
    <input type="text" />
</form>
</div>

<div className={styles.header__cart}>
<button className={styles.header__buttonCart}>
<img src={cart}/>
<div className={styles.header__quantityBlock}>
<p className={styles.header__quatityNumber}>1</p>
</div>
</button>
{/* this is a popub hint
 <div className = {styles.header__popupHint}>
<p>перейти в корзину</p>
</div>   */}


</div>

</div>
   </header>
)
}

export default Header