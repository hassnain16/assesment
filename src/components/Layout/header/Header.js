import React from 'react'
import Logo2X from '../../../assets/Logo@2x.png';
import Button from '../../UI/Button/Button';
//styles
import './styles.css'
function Header() {
    return (
        <header>
            <div>
                <span>
                    <img src={Logo2X} alt="logo" />
                    <div className="divider" />
                </span>
                <nav></nav>
            </div>
            <Button
                id="getInTouch"
                name="getInTouch"
                onClick={() => alert("getInTouch")}
                title="Get in touch"
            />
        </header>
    )
}

export default Header