import './header.scss';
import Navbar from './Navbar';
import burgerLogo from '../../assets/images/burgerlogo.png';

function Header() {
  return (
    <>
      <header className="w-full text-center">
        <div className="header-wrapper px-6 w-11/12 mx-auto py-3 flex md:gap-0 md:flex-row flex-col gap-3 items-center justify-between">
          <div className="logo ">
            <img className="w-36" src={burgerLogo} alt="burger logo" />
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
}

export default Header;
