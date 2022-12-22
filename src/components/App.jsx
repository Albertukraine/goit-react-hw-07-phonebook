import React from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { Filter } from './Filter/Filter';

// тестовый Див
// const FindState = () => {
//   const value = useSelector( state => state.filterValue);
//   return (<>
//   <div>{value} RUUUM</div></>);
// }

export function App() {
  return (
    <>
      <Form />
      <Filter />
      <NameList />
    </>
  );
}
