import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItem = [
    { page: 'Anasayfa', route: '/' },
    { page: 'Menu', route: '/menu' },
    { page: 'Hakkimda', route: '/about' },
    { page: 'İletişim', route: '/contact' },
  ];

  return (
    <>
      <nav>
        <ul className="flex justify-between items-center gap-8">
          {navItem.map((item, i) => (
            <li className="w-full" key={i}>
              <NavLink className="block w-full  py-2 font-bold text-white tracking-wider" to={item.route}>
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
