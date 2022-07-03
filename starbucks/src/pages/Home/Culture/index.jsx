import React from 'react'
import {CultureWrapper} from './style'
import { Link } from 'react-router-dom'

export default function Culture({ culture = [{img: ''},{img: ''},{img: ''},{img: ''}] }) {

    const renderCultureList = () => {
        return culture.map(item => {
            return (
                <Link
                    key={item.id}
                    to='/home'
                    className='thumbnail rect card'
                    id={item.id} >
                    <div className="preview">
                        <img src={item.img} alt="" />
                    </div>
                    <span className="tag">{item.title}</span>
                    <strong>{item.contains}</strong>
                </Link>
            )
        })
    }

    return (
        <CultureWrapper>
            <div className="wrapper center">
                <h2 className="wrapper-mobile">1912 派克街 | 咖啡星讲堂</h2>
                <p className="light wrapper-mobile">了解更多星巴克咖啡文化</p>
            </div>
            <div className="scroll-wrapper">
                <div className="scroll-arrow scroll-arrow-left hidden">
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-scroll-left.svg" />
                </div>
                <div className="scroll">
                    <div className="wrapper">
                        <div className="scroll-items">
                            {renderCultureList()}
                        </div>
                    </div>
                </div>
                <div className="scroll-arrow scroll-arrow-right">
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-scroll-right.svg' />
                </div>
            </div>
        </CultureWrapper>
    )
}
