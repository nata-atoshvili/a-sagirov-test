import "./styles.css";

const Header = () => (
    <header className="header">
        <div className="header__container">
            <a href="#" className="logo"></a>
            <nav className="nav">
                <a href="#" className="nav__item">
                    Главная
                </a>
                <a href="#" className="nav__item">
                    Технология
                </a>
                <a href="#" className="nav__item">
                    График полетов
                </a>
                <a href="#" className="nav__item">
                    Гарантии
                </a>
                <a href="#" className="nav__item">
                    О компаии
                </a>
                <a href="#" className="nav__item">
                    Контакты
                </a>
            </nav>
        </div>
    </header>
);

export default Header;
