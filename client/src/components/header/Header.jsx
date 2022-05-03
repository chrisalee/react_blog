import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <span className="header__titleSm">React & Node</span>
        <span className="header__titleLg">Blog</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1630710478039-9c680b99f800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="header__img"
      />
    </div>
  );
};

export default Header;
