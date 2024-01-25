import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section id="notFound" className="mb-10 flex flex-col items-center gap-10">
        <h1 className="text-6xl text-center">404 Sayfa Bulunamadı.</h1>
        <button onClick={() => navigate('/')}>Anasayfaya Dön</button>
      </section>
    </>
  );
}

export default NotFound;
