import "./styles.css";

const Hero = () => (
    <div className="hero">
        <div className="hero__container">
            <div className="hero__left">
                <h1 className="hero__title">Путешествие</h1>
                <div className="hero__description">на красную планету</div>
                <button className="hero__button">Начать путешествие</button>
                <div className="hero__label"></div>
            </div>
            <div className="list">
                <div className="list__item">
                    мы<div className="list__title">1</div>на рынке
                </div>
                <div className="list__item">
                    гарантируем<div className="list__title">50%</div>
                    безопасность
                </div>
                <div className="list__item">
                    календарик за
                    <div className="list__title">
                        2001<span className="list__title--small">г.</span>
                    </div>
                    в подарок
                </div>
                <div className="list__item">
                    путешествие<div className="list__title">597</div>дней
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
