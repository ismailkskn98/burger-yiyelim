import MenuCard from './MenuCard';
import PropTypes from 'prop-types';

function MenuCards({ menuList }) {
  return (
    <>
      <div className="cards-wrapper w-full px-5 py-10 mt-5 grid grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-5 xl:grid-cols-3 2xl:grid-cols-4 ">
        {menuList.map((menuItem, i) => (
          <MenuCard key={i} menuItem={menuItem} />
        ))}
      </div>
    </>
  );
}

MenuCards.propTypes = {
  menuList: PropTypes.array,
};

export default MenuCards;
