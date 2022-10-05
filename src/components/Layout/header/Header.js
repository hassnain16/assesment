import React from 'react'
import Logo2X from '../../../assets/Logo@2x.png';
import Button from '../../UI/Button/Button';
import { BiChevronDown } from 'react-icons/bi'

//styles
import './styles.css'
function Header() {
    const menuList = [
        { title: "Quick Facts" },
        { title: "Benefits" },
        { title: "Contact" },
    ]
    return (
        <header>
            <div className="nav-bar">
                <span>
                    <img src={Logo2X} alt="logo" />
                    <div className="divider" />
                </span>
                <nav>
                    <ul>
                        {
                            menuList.map((item, i) => {
                                return (
                                    <li>{item.title}<BiChevronDown /></li>
                                )
                            })
                        }
                    </ul>
                </nav>
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