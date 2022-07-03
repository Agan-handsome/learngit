import React from 'react'
import {GoodsWrapper} from './style'
import { Link } from 'react-router-dom'

export default function Goods({goods = []}) {

    const renderGoodsList = () => {
        return goods.map(item => {
            return (
                <li key={item.id}>
                    <Link 
                        to='/home'
                        className='tablet-block mobile-hidden'
                        key={item.id}
                    >
                        <img src={item.img} />
                        <p className="title-1">
                            <strong>{item.title}</strong>
                        </p>
                        <p className="margin2">
                            {item.contains1}
                            <br />
                            {item.contains2}
                        </p>
                        <p className="caption">了解更多 ›</p>
                    </Link>
                </li>
            )
        })
    }

    return (
        <GoodsWrapper>
            <div className="wrapper">
                <h2 className="wrapper-mobile">星巴克精选</h2>
                <p className="light wrapper-mobile">在星巴克天猫旗舰店发现更多咖啡心意</p>
                <ul className="grid columns-4 padded-2">
                    {renderGoodsList()}
                </ul>
            </div>
        </GoodsWrapper>
    )
}
