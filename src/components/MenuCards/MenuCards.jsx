import MenuCard from './MenuCard';
import PropTypes from 'prop-types';

function MenuCards({ menuList }) {
  return (
    <>
      <div className="cards-wrapper w-full py-10 mt-5 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-3 2xl:grid-cols-4 ">
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
