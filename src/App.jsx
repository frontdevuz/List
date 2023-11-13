import React, { useState } from "react";
import {
  Form,
  FormBCircle,
  FormBox,
  FormButton,
  FormContainer,
  FormInput,
  FormInputBox,
  FormLabel,
  FormLogo,
  FormLogoBox,
  FormSCircle,
  FormTextarea,
  FormSelect,
  FormOption,
} from "./AppStyle";
import "./AppGlobal.css";
export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [partnumber, setPartNumber] = useState("");
  const [insterest, setInterest] = useState("");
  const [main, setMain] = useState("");
  const botToken = "6725101800:AAGTAEg2cYWzx8pvMouaORPitRhBWDh3ntM";
  const ChanelID = "-1002013242551";
  let DATA = `O'quvchi: \n
  Ismi Familiyasi: ${name}\n
  Telefoni raqami: ${number}\n
  Qo'shimcha telefon raqami: ${partnumber}\n
  Yozilgan kursi: ${insterest}\n
   {@izzatillodev} sizga xabar yuborildi !`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${ChanelID}&text=${encodeURI(
    DATA
  )}`;
  async function sendMessage() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <FormBCircle>CLISE</FormBCircle>
      <FormSCircle>we live to solve</FormSCircle>
      <Form>
        <FormContainer>
          <FormBox>
            <FormLogoBox>
              <FormLogo className="fa-solid fa-user"></FormLogo>
            </FormLogoBox>
            <FormInputBox>
              <FormLabel htmlFor="name">Ism Familya:</FormLabel>
              <FormInput
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormInputBox>
            <FormInputBox>
              <FormLabel htmlFor="phone">Telefon raqam:</FormLabel>
              <FormInput
                type="text"
                id="phone"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormInputBox>
            <FormInputBox>
              <FormLabel htmlFor="partNumber">
                Qo'shimcha telefon raqami:
              </FormLabel>
              <FormInput
                type="text"
                id="partNumber"
                required
                value={partnumber}
                onChange={(e) => setPartNumber(e.target.value)}
              />
            </FormInputBox>

            <FormInputBox>
              <FormLabel htmlFor="interest">Kurs:</FormLabel>
              <FormSelect
                id="interest"
                required
                value={insterest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="Kurs"
              >
                <FormOption
                  value="Foundation"
                  onChange={(e) => setInterest(e.target.value)}
                >
                  Foundation
                </FormOption>
                <FormOption
                  value="Front end"
                  onChange={(e) => setInterest(e.target.value)}
                >
                  Front end
                </FormOption>
                <FormOption
                  value="English"
                  onchange={(e) => setInterest(e.target.value)}
                >
                  English
                </FormOption>
                <FormOption
                  value="Russian"
                  onchange={(e) => setInterest(e.target.value)}
                >
                  Russian
                </FormOption>
              </FormSelect>
            </FormInputBox>

            <FormInputBox>
              <FormLabel htmlFor="data">Qisqa izoh:</FormLabel>
              <FormTextarea
                id="data"
                required
                value={main}
                onChange={(e) => setMain(e.target.value)}
              ></FormTextarea>
            </FormInputBox>
            <FormInputBox>
              <FormButton type="submit" onClick={sendMessage}>
                Jo'natish
              </FormButton>
            </FormInputBox>
          </FormBox>
        </FormContainer>
      </Form>
    </React.Fragment>
  );
}
