import BannerImage from '../assets/images/banneryeni.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section id="home" className="w-full relative">
        <img className="w-full" src={BannerImage} alt="burger banner image" />
        <button onClick={() => navigate('/menu')} className="absolute bottom-20 left-28">
          SİPARİŞ VER
        </button>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-8xl uppercase mb-2 text-center">Burger Yiyelim</h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique deleniti? Pariatur, ab at ea
            dolorem dolore quibusdam. Dolor quis voluptate quisquam necessitatibus quibusdam facilis eum molestiae
            maiores nulla aut.
          </p>
        </div>
      </section>
      {/* İçerik Gelecek */}
      <section className="w-full flex flex-col items-center my-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corporis porro maiores commodi illo facere
          nesciunt consequuntur molestiae, natus accusamus dolorum eos odit alias. Eaque, veniam animi. Accusantium,
          placeat mollitia.
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corporis porro maiores commodi illo facere
          nesciunt consequuntur molestiae, natus accusamus dolorum eos odit alias. Eaque, veniam animi. Accusantium,
          placeat mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corporis porro maiores commodi illo facere
          nesciunt consequuntur molestiae, natus accusamus dolorum eos odit alias. Eaque, veniam animi. Accusantium,
          placeat mollitia.
        </p>
      </section>
    </>
  );
}

export default Home;
