import styled from "styled-components";
export const Form = styled.form`
  min-height: 100vh;
  padding: 5rem 0;
  width: 100%;
  background: linear-gradient(to right, #6161ee, pink) no-repeat;
  display: flex;
  justify-content: center;
  align-items: start;
  /* position: relative; */
`;
export const FormSelect = styled.select`
  border: none;
  height: 40px;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 17px;
  cursor: pointer;
  user-select: none;
  outline: none;
`;
export const FormOption = styled.option`
  background: white;
  user-select: lime;
`;
export const FormContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const FormLogoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FormLogo = styled.i`
  color: white;
  font-size: 200px;
`;
export const FormBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  box-shadow: 0px 0px 10px inset white;
  background: #ffffff2b;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
`;
export const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em 0;
`;
export const FormInput = styled.input`
  border: none;
  height: 40px;
  border-radius: 10px;
  padding: 0px 20px;
  font-size: 17px;
  cursor: pointer;
`;
export const FormTextarea = styled.textarea`
  border: none;
  height: 40px;
  border-radius: 10px;
  font-size: 17px;
  padding: 0px 20px;
`;
export const FormButton = styled.button`
  height: 40px;
  border-radius: 10px;
  padding: 0px 20px;
  font-size: 18px;
  border: none;
  background: #6161ee93;
  color: white;
  cursor: pointer;
  &:active {
    transform: scale(1.1);
  }
`;
export const FormLabel = styled.label`
  font-size: 18px;
  cursor: pointer;
`;
export const FormBCircle = styled.div`
  position: absolute;
  top: -300px;
  left: 20px;
  width: 400px;
  height: 400px;
  z-index: 90;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0px 0px 10px inset white;
  background-color: #ffc0cb78;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 18rem;
  font-size: 30px;
  color: white;
`;
export const FormSCircle = styled.div`
  padding-top: 18rem;
  font-size: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -300px;
  right: 20px;
  width: 400px;
  height: 400px;
  z-index: 90;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0px 0px 10px inset white;
  background-color: #5e5eea8e;
`;
