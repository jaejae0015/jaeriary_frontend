import axios from "axios";

export interface Diary {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getDiaries = async (): Promise<Diary[]> => {
  const res = await axios.get("/api/diaries");
  return res.data;
};

export const getDiary = async (id: number): Promise<Diary> => {
  const res = await axios.get(`/api/diaries/${id}`);
  return res.data;
};

export const createDiary = async (data: {
  title: string;
  content: string;
}) => {
  return axios.post("/api/diaries", data);
};

export const updateDiary = async (
  id: number,
  data: { title: string; content: string }
) => {
  return axios.put(`/api/diaries/${id}`, data);
};

export const deleteDiary = async (id: number) => {
  return axios.delete(`/api/diaries/${id}`);
};