import axios from 'axios';
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function Form() {
  const initailValue = {
    name: '',
    email: '',
    message: '',
  };

  const [{ name, email, message }, setInputValues] = useState(initailValue);

  function resetValues() {
    setInputValues({ ...initailValue });
  }

  const handleChange = (e) => {
    setInputValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  // To fetch data
  //const [initailState, setInitialState] = useState([])
  // useEffect(() => {
  //   fetch('/api/feed').then(res => {
  //     if(res.ok) {
  //       return res.json()
  //     }
  //   }).then(jsonResponse => setInitialState(jsonResponse))
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post('data', { name, email, message })
        .then((response) => {
          console.log(response);
        })
        .then(resetValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputForm>
        <Title>Reach out to us!</Title>
        <StyledInput
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='Your name*'
        />
        <StyledInput
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='Your e-mail*'
        />
        <InputMessage
          name='message'
          value={message}
          onChange={handleChange}
          placeholder='Your message*'
        />
        <SubmitButton type='submit' onSubmit={handleSubmit}>
          Send message
        </SubmitButton>
      </InputForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 100;

  margin-top: 150px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const InputForm = styled.div`
  width: 80%;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 31px 46px;
  outline: none;
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;

  color: #2d2d2d;
  ::placeholder {
    color: #2d2d2d;
  }
`;

const InputMessage = styled.textarea`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 31px 46px;
  outline: none;
  height: 189px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;

  color: #2d2d2d;
  ::placeholder {
    color: #2d2d2d;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;

  color: #3e3e3e;
  width: 100%;
  text-align: left;
`;

const SubmitButton = styled.button`
  padding: 27px 52px;
  background: #fad34f;
  border-radius: 500px;
  margin-top: 13px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
`;
