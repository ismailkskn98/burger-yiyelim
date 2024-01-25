import { useReducer } from 'react';
import formReducer from '../reducers/formReducer';
import { initialValues } from '../reducers/formReducer';

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialValues);
  const { fullname, email, message } = state;

  // Form submit
  const handleSubmit = () => {
    alert(`fullname: ${fullname} || email: ${email} || message: ${message}`);
  };

  // Form inputs
  const handleFullname = (e) => {
    dispatch({ type: 'UPDATEFULLNAME', payload: e.target.value });
  };
  const handleEmail = (e) => {
    dispatch({ type: 'UPDATEEMAIL', payload: e.target.value });
  };
  const handleMessage = (e) => {
    dispatch({ type: 'UPDATEMESSAGE', payload: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center w-full">
        <h1 className="text-6xl mb-10">Bizimle İletişime Geçin</h1>
        <div className="form-items w-full flex flex-col gap-5">
          <div className="form-item">
            <label htmlFor="fullname">Ad Soyad</label>
            <input
              value={fullname}
              onChange={handleFullname}
              type="text"
              id="fullname"
              placeholder="Adınız Soyadınız..."
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={handleEmail} type="email" id="email" placeholder="Email Adresiniz..." />
          </div>
          <div className="form-item">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              value={message}
              onChange={handleMessage}
              id="message"
              cols="30"
              rows="10"
              placeholder="Lütfen mesajınızı giriniz..."
            ></textarea>
          </div>
        </div>
        <button className="mt-10 px-10 text-lg hover:bg-slate-600 hover:text-white">Gönder</button>
      </form>
    </>
  );
}

export default Form;
