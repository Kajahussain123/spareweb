import axios from "axios";
import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

//login
export const loginApi = async (email, password) => {
    try {
      const body = { email, password };
      const response = await commonApi('POST', `${BASE_URL}/api/login/`, body, '');
      console.log('API response:', response); // Log the entire response object
  
      // Normalize the response to include a success property
      const normalizedResponse = {
        success: response.data.message === 'Login successful',
        ...response.data,
      };
  
      return normalizedResponse;
    } catch (error) {
      console.error('API error:', error); // Log any errors
      throw error; // Propagate the error
    }
  };
  


// register
export const register = async (body) => {
    return await commonApi('POST', `${BASE_URL}/api/register/`, body, '');
  };


// get all car brand 
export const carbrands = async (body) => {
  return await commonApi("GET", `${BASE_URL}/api/brands/main-categories/1/`, body, "");
};

// get all bike brands 
export const bikebrands = async (body) => {
  return await commonApi("GET", `${BASE_URL}/api/brands/main-categories/2/`, body, "");
};

// get brand vehicles
export const carbrandsvehicles = async (body, brand_id) => {
  if (!brand_id) {
    throw new Error('No brand_id provided');
  }

  const endpoint = `${BASE_URL}/api/vehicles/brands/${brand_id}`;
  console.log(`Requesting: ${endpoint}`);

  try {
    const response = await axios.get(endpoint, {
      params: body,
    });
    return response;
  } catch (error) {
    console.error('Error fetching car brand vehicles:', error);
    throw error;
  }
};

// get all car accessories
export const fetchCarAccessories = async () => {
  try {
      const response = await fetch(`${BASE_URL}/api/accessory/Car/`);
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return empty array or handle error as per your application's needs
  }
};

// get all Bike accessories
export const fetchBikeAccessories = async () => {
  try {
      const response = await fetch(`${BASE_URL}/api/accessory/Bike/`);
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Handle error appropriately
  }
};