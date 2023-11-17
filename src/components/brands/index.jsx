import React from 'react'
import './index.css'
import gucci from './../../assets/gucci.svg'
import richDad from './../../assets/rich-dad.svg'
import racolte from './../../assets/racolte.svg'
import circuit from './../../assets/circuit-city-3.svg'
export const Brand = () => {
  return (
    <section className='brands'>
        <div className="container">
            <ul className="brands__list">
                <li><a href=""><img src={gucci} alt="" /></a></li>
                <li><a href=""><img src={richDad} alt="" /></a></li>
                <li><a href=""><img src={racolte} alt="" /></a></li>
                <li><a href=""><img src={circuit} alt="" /></a></li>
            </ul>
        </div>
    </section>
  )
}
