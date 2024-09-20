import { ApiBoilerPlate } from "./BoilerPlate";

const baseURL = import.meta.env.VITE_BACKEND_URL;
// get all the data from the server
export const getAllData = async () => {
  return await ApiBoilerPlate('GET', `${baseURL}/all`, null, '');
}

// add a new book to the server
export const addData = async (data) => {
  return await ApiBoilerPlate('POST', `${baseURL}/add`, data, 'json');
}

// edit a book in the server
export const editData = async (data) => {
  return await ApiBoilerPlate('PUT', `${baseURL}/update`, data, 'json');
}

// delete a book from the server
export const deleteData = async (entryId) => {
  return await ApiBoilerPlate('DELETE', `${baseURL}/delete`, entryId, 'path');
}

