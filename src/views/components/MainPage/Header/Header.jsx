import React  from 'react'
import  styles from "./header.module.scss"
import cart from "./images/cart.png"
import { useDispatch,useSelector } from 'react-redux'

const Header = () => {

return (
   <header className={styles.header}>
   <div className = {styles.header__container}>
<div className = {styles.header__logo}>
 Online store
</div>
<div className = {styles.header__searchPanel}>

<div className = {styles.header__searchPanelContainer}>
   <form  action="">
   <input placeholder="search..." type="text"  className = {styles.header__searchArea}/>
   <button className= {styles.header__buttonSearch}>Find</button>
   </form>
      </div>

</div>

<div className={styles.header__cart}>
<button className={styles.header__buttonCart}>
<img src={cart}/>
<div className={styles.header__quantityBlock}>
<p className={styles.header__quatityNumber}>18</p>
</div>
</button>
</div>
</div>
   </header>
)
}

export default Header