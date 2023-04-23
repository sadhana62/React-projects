
import useInput from "../hooks/user-input";
const SimpleInput = (props) => {
  const {
       value:enteredName,
       isValidInput:isValidName,
       hasError:notvalid,
       enteredValueHandler:enteredNameHandler,
       enteredBlurHandler,
       reset:resetName

        } = useInput(value => value !== '')
  const {
          value:enteredMail,
          isValidInput:isValidMail,
          hasError:notvalidMail,
          enteredValueHandler:enteredMailHandler,
          enteredBlurHandler:enteredBlurMailHandler,
          reset:resetMail
   
           } = useInput(value => value.includes('@'))
  
  let isFormValid = false ;
  if (isValidName && isValidMail) {
    isFormValid = true;
  }

  

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    if (!isValidName){
      return;
    }
    if(!isValidMail){
      return;
    }
    console.log(enteredName);
    console.log(enteredMail);
    resetName();
    resetMail();
  }
 
  const formClass = !notvalid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' 
           id='name' 
           onChange={enteredNameHandler} 
           value={enteredName}
           onBlur={enteredBlurHandler}/>
          {notvalid && (<p className='error-text'>Name cannot be empty</p>)}
   
          <label htmlFor='name'>Your Email</label>
          <input type='text' 
           id='password' 
           onChange={enteredMailHandler} 
           value={enteredMail}
           onBlur={enteredBlurMailHandler}/>
           {notvalidMail && (<p className='error-text'>email must conatins @</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
