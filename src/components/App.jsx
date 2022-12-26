import React from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <Loader />
      <NameList />
    </>
  );
}
