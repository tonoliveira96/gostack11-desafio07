import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Header from '../../components/Header';

import { Container, Title, FormContainer } from './styles';

import api from '../../services/api';

interface SignFormData {
  title: string;
  value: string;
}

const Create: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastrar uma transação</Title>
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <input defaultValue="" name="title" placeholder="Descrição" />
            <input defaultValue="" name="value" placeholder="Valor" />

            <button type="submit">Salvar</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Create;
