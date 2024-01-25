import { Data } from '../helpers/data';
import MenuCards from '../components/MenuCards/MenuCards';

function Menu() {
  return (
    <>
      <section id="menu" className="mt-10 w-11/12 mx-auto px-6 flex flex-col items-center">
        <h1 className="text-6xl text-center font-bold">Burgerlerimiz</h1>
        <MenuCards menuList={Data} />
      </section>
    </>
  );
}

export default Menu;
