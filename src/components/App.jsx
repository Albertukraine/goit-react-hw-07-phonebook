import React from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { Filter } from './Filter/Filter';



export function App() {
  return (
    <>
      <Form />
      <Filter />
      <NameList />
    </>
  );
}
