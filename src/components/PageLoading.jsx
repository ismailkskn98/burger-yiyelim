import PropTypes from 'prop-types';

function PageLoading({ pageName }) {
  return (
    <>
      <h1 className="text-center font-bold text-lg">{pageName} sayfası yükleniyor...</h1>
    </>
  );
}

PageLoading.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PageLoading;
