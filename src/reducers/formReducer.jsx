export const initialValues = {
  fullname: '',
  email: '',
  message: '',
};

const formReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'UPDATEFULLNAME':
      return { ...state, fullname: action.payload };
    case 'UPDATEEMAIL':
      return { ...state, email: action.payload };
    case 'UPDATEMESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default formReducer;
