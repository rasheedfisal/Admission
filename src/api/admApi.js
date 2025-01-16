import { authApi } from "./axios";

export const getAdmissionByPhone = async (phone) => {
  const response = await authApi.get(`admission/GetAdmission?ph=${phone}`);
  return response.data;
};

export const createAdmissionFn = async (formData) => {
  const response = await authApi.post(`admission/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateAdmissionFn = async (formData) => {
  const response = await authApi.put(`admission/Update`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteStdFn = async (id) => {
  const response = await authApi.delete(`admission/deletestd?stdid=${id}`);
  return response.data;
};
