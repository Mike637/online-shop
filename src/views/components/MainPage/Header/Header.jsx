import React  from 'react'
import  styles from "./header.module.scss"

const Header = () => {
return (
   <header>
<div className = {styles.Logo}>
Online-shop
</div>
<div className = "SearchPanel">
<form action="">
    <input type="text" />
<input type="button" value="Click" />
</form>
</div>
<div className="Cart">

</div>
   </header>
)
}

export default Header