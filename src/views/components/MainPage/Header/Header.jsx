import React  from 'react'
import  styles from "./header.module.scss"
import cart from "./images/cart.png"
import search from "./images/search.png"

const Header = () => {
return (
   <header className={styles.header}>
   <div className = {styles.header__container}>
<div className = {styles.header__logo}>
 Online store
</div>
<div className = {styles.header__searchPanel}>

<div className = {styles.header__searchPanelContainer}>
   <p><form сlassName= {styles.header__searchForm} action="">
   <input placeholder="search..." type="text"  className = {styles.header__searchArea}/>
   <button className= {styles.header__buttonSearch}>Find</button>
   </form></p>
      </div>
{ /*<div className = {styles.header__searchPanelContainer}>


<form сlassName= {styles.header__searchForm} action="">
<input type="text"  className = {styles.header__searchArea}/>
<button className= {styles.header__buttonSearch}><img src={search}/></button>
</form>
</div> */ }
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