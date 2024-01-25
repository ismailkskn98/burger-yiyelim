import iletisimImage from '../assets/images/banner.png';
import Form from '../components/Form';

function Contact() {
  return (
    <>
      <section id="contact" className="flex flex-col xl:flex-row justify-between mb-10 gap-10">
        <img src={iletisimImage} className="w-full rounded shadow-lg" alt="burger iletisim resim" />
        <Form />
      </section>
    </>
  );
}

export default Contact;
