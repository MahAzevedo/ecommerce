import Logo from './assets/Logo.jpg';

export default function Header() {
    return (
        <div>
            <div>Jewelry are forever!</div>
                <img src={Logo} alt='Logo do Ecommerce' />
                <nav>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Comprar</a>
                    </li>
                    <li>
                        <a href='#'>Login</a>
                    </li>
                </nav>
        </div>
    )
}

// admin