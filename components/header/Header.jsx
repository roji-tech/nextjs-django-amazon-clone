import HeaderStyle from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">amazon</div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="nav">
        <div className="option">
          <span className="lineOne">Hello Guest</span>
        </div>
        <div className="option">
          <span className="lineTwo">Sign In</span>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
