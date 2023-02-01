import React, {useEffect} from 'react'
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
import { useDispatch,useSelector } from 'react-redux'
import {setGoods} from "../../../reducers/getGoodsReducer.js"


const imageArray = [
    {id:1,path:mercedesBenz,name:"MercedesBenz",price:400},
    {id:2,path:bmwI8,name:"BmwI8",price:200},
{id:3,path:bmwM5,name:"BmwM5",price:150},
{id:4,path:bmwE34,name:"BmwE34",price:320},
{id:5,path:bmwVision,name:"BmwVision",price:300},
{id:6,path:mitsubishiLancer,name:"MitsubishiLancer",price:450},
{id:7,path:nissanGtr,name:"NissanGtr",price:1000},
{id:8,path:porsche911 ,name:"Porsche911",price:180},
{id:9,path:lamborgini,name:"Lamborgini",price:310}
]



const Main = () => {

    const dispatch = useDispatch()
    const goods =  useSelector(state => state.getGoods.goods)



    useEffect( () =>  dispatch(setGoods(imageArray)),[])




    return (
<main className= {styles.main}>
<div className = {styles.main__container}>
<div className ={styles.main__goodsList}>

{
goods.length !== 0?
goods.map(good =>
<div className = {styles.main__good}>
<div className = {styles.main__goodImage}>
<img src={good.path} alt='picture_is_not_found' />
</div>
<div className ={styles.main__goodText}>
 <p className={styles.main__name}>{good.name}</p>
 <p className={styles.main__price}>{`${good.price}$`}</p>
 <div className={styles.main__addToCart}>
<button  className={styles.main__addToCartButton}>Add to cart</button>
</div>
<div className={styles.main__editQuantity}>
<button className={styles.main__plusQuantityButton}>
    <div className={styles.main__plusQuantity}></div>
</button>
<button className = {styles.main__QuantityNumberButton}><div className={styles.main__QuantityNumber}>18</div></button>
<button className={styles.main__minusQuantityButton}>
<div className={styles.main__minusQuantity}></div>
</button>
</div>
</div>
</div>
)
:
<div className={styles.main__isLoading}>

</div>
}
</div>
</div>

</main>

)
}

export default Main
