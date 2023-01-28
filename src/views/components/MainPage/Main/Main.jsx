import React from 'react'
import { Router ,Link, Routes,Route } from "react-router-dom"
import styles from './main.module.scss'
import  mercedesBenz from './images/mercedesBenz.jpg'
import  bmwI8 from './images/bmwI8.jpg'
import  bmwM5 from './images/bmwM5.jpg'
import  lamborgini from './images/lamborgini.jpg'

const imageArray = [{id:1,path:mercedesBenz,name:"mercedesBenz",price:400},
    {id:2,path:bmwI8,name:"bmwI8",price:200},
{id:3,path:bmwM5,name:"bmwM5",price:150},
{id:4,path:lamborgini,name:"lamborgini",price:320}

]



const Main = () => {
    return (
<main className= {styles.main}>
<div className = {styles.main__container}>
<div className ={styles.main__goodsList}>

{

imageArray.map(img =>
<div className = {styles.main__good}>
<div className = {styles.main__goodImage}>
<img src={img.path} alt='picture_is_not_found' />
</div>
<div className ={styles.main__goodText}>
 <p>{img.name}</p>
 <p>{img.price}</p>
<button>Добавить в корзину</button>
<div className={styles.main__quanity}>
<button>
    <div className={styles.main__tringleLeft}></div>
</button>
<button><div>18</div></button>
<button>
<div className={styles.main__tringleRight}></div>
</button>
</div>


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
