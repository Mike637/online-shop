import React, {useState}  from 'react'
import  styles from "./header.module.scss"
import cart from "./images/cart.png"
import { useDispatch,useSelector } from 'react-redux'
import {setValue} from "../../../reducers/searchReducer.js"

const Header = () => {

const [inputText,setInputText] = useState("")
const dispatch = useDispatch()
const value = useSelector(state=>state.search.value)
console.log(value)
const onClick = (e) => {
e.preventDefault()
dispatch(setValue(inputText))
console.log(value)
}

const onChange = e =>  {
   setInputText(e.target.value)
}

return (
   <header className={styles.header}>
   <div className = {styles.header__container}>
<div className = {styles.header__logo}>
 Online store
</div>
<div className = {styles.header__searchPanel}>

<div className = {styles.header__searchPanelContainer}>
   <form  action="">
   <input placeholder="search..." type="text" onChange={onChange} className = {styles.header__searchArea}/>
   <button onClick ={onClick} className= {styles.header__buttonSearch}>Find</button>
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