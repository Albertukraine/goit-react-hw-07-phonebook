import React from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';

// axios.defaults.baseURL = "https://63a427c49704d18da09fd28c.mockapi.io";
// const deleteTest = axios.get(`/contacts/:9`);
// deleteTest();


export function App() {


  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <NameList />
    </>
  );
}
