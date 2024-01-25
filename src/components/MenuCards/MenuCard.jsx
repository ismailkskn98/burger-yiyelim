import PropTypes from 'prop-types';

function MenuCard({ menuItem }) {
  const { name, description, image, price } = menuItem;
  // console.log(menuItem);
  return (
    <>
      <div className="menu-card flex flex-col items-center border rounded shadow-md px-3 pb-3 overflow-hidden w-full sm:w-auto transition-all hover:translate-x-3 hover:-translate-y-3 hover:shadow-xl">
        <img className="w-80 -mt-10" src={image} alt={name} />
        <div className="menu-text -mt-10">
          <h2 className="text-4xl font-bold text-center">{name}</h2>
          <p className="text-sm tracking-wider text-center text-gray-500 mt-2">{description}</p>
        </div>
        <span className="text-red-400 text-lg block text-center my-5 font-bold"> {price} TL </span>
      </div>
    </>
  );
}
MenuCard.propTypes = {
  menuItem: PropTypes.object,
};

export default MenuCard;
