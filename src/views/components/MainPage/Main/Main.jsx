import React from 'react'
import { Router ,Link } from "react-router-dom"
import styles from './main.module.scss'
import  mercedesBenz from './images/mercedesBenz.jpg'
import  bmwI8 from './images/bmwI8.jpg'
import  bmwM5 from './images/bmwM5.jpg'
import  lamborgini from './images/lamborgini.jpg'

const imageArray = [{id:1,name:mercedesBenz},
    {id:2,name:bmwI8},
{id:3,name:bmwM5},
{id:4,name:lamborgini}

]



const Main = () => {
    return (
<main className= {styles.main}>
<div className = {styles.main__container}>
<div className ={styles.main__goodsList}>

{
imageArray.map(img =>
<div className = {styles.main__good}>
<Router>
    <Link to="/">
<div className = {styles.main__goodImage}>
<img src={img.name} alt='picture_is_not_found' />
</div>
</Link>
</Router>
<div className ={styles.main__goodText}>
    <p>Здесь будут кнопки</p>
</div>
</div>
)
}

</div>
</div>
</main>
)
}

export default Main