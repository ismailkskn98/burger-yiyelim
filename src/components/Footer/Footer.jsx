import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './footer.scss';

function Footer() {
  return (
    <>
      <footer className="text-white flex flex-col items-center py-5 gap-5">
        <div className="buttons flex justify-center items-center gap-5 text-3xl">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaXTwitter />
        </div>
        <div className="copyright text-sm tracking-wider">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, provident.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
