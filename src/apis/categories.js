import { apiClient } from "./axios";

export const getCategories = async () => apiClient.get("/v1/categories");

export const addCategory = async (title) =>
  apiClient.post("/v1/categories", { title });

export const deleteCategory = async (id) =>
  apiClient.delete(`/v1/categories/${id}`);

export const updateCategory = async (id, newTitle, hidden = false) => {
  const params = { title: newTitle, hide_globally: hidden ? "on" : undefined };
  return apiClient.put(`/v1/categories/${id}`, params);
};
