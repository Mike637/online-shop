import React from 'react'
import { Router ,Link, Routes,Route } from "react-router-dom"
import styles from './main.module.scss'
import  mercedesBenz from './images/mercedesBenz.jpg'
import  bmwI8 from './images/bmwI8.jpg'
import  bmwM5 from './images/bmwM5.jpg'
import  bmwE34 from './images/bmwE34.jpg'
import  bmwVision from './images/bmwVision.jpg'
import  mitsubishiLancer from './images/mitsubishiLancer.jpg'
import  nissanGtr from './images/nissanGtr.jpg'
import  porsche911 from './images/porsche911.jpg'
import  lamborgini from './images/lamborgini.jpg'

const imageArray = [
    {id:1,path:mercedesBenz,name:"mercedesBenz",price:400},
    {id:2,path:bmwI8,name:"bmwI8",price:200},
{id:3,path:bmwM5,name:"bmwM5",price:150},
{id:4,path:bmwE34,name:"bmwE34",price:320},
{id:5,path:bmwVision,name:"bmwVision",price:300},
{id:6,path:mitsubishiLancer,name:"mitsubishiLancer",price:450},
{id:7,path:nissanGtr,name:"nissanGtr",price:1000},
{id:8,path:porsche911 ,name:"porsche911",price:180},
{id:9,path:lamborgini,name:"lamborgini",price:310}
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
 <p className={styles.main__name}>{img.name}</p>
 <p className={styles.main__price}>{`${img.price}$`}</p>
 <div className={styles.main__addToCart}>
<button >Добавить в корзину</button>
</div>
<div className={styles.main_editQuantity}>
<button>
    <div className={styles.main__tringleRight}></div>
</button>
<button><div className={styles.main__QuantityNumber}>18</div></button>
<button>
<div className={styles.main__tringleLeft}></div>
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
