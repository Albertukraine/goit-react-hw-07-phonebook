// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";
// import { useDispatch } from 'react-redux';

// console.log("fetchingInProgress",fetchingInProgress);


// export async function getUser() {
//   try {
//     const response = await axios.get('https://63a427c49704d18da09fd28c.mockapi.io/contacts/');
//     let dataToLocal = response.data;
//     console.log(dataToLocal);
//   } catch (error) {
//     console.error(error);
//   }
// };

// axios.defaults.baseURL = "https://63a427c49704d18da09fd28c.mockapi.io";
// export const getUser = createAsyncThunk(
//     "fetchingSuccess",
//     async (_, thunkAPI) => {
//       try {
//         const response = await axios.get("/contacts");
//         console.log("response.data");
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );



// export const getUser = async () => {
//     console.log("get User WORKS");
//     // const dispatch = useDispatch();
    
//   try {
   
//     // Индикатор загрузки
//     // dispatch(() => fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get("/contacts");
//     console.log(response.data);
//     // Обработка данных
//     // dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обработка ошибки
   
//     // dispatch(fetchingError(e.message));
//   }
// };