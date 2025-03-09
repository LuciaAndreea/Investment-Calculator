
import picture from '../assets/invest-picture.jpg'

export default function Header(){
    return <header id="header">
        <img src={picture} alt="" />
        <h1>Investment Calculator</h1>
    </header>
}