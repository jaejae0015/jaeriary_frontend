import api from "./axios";

export interface Diary {
  id: number;
  title: string;
  content: string;
}

export interface DiaryRequest {
  title: string;
  content: string;
}

export const getDiaries = async (): Promise<Diary[]> => {
  const res = await api.get("/diaries");
  return res.data;
};

export const getDiary = async (id: number): Promise<Diary> => {
  const res = await api.get(`/diaries/${id}`);
  return res.data;
};

export const createDiary = (data: DiaryRequest) =>
  api.post("/diaries", data);

export const updateDiary = (id: number, data: DiaryRequest) =>
  api.put(`/diaries/${id}`, data);

export const deleteDiary = (id: number) =>
  api.delete(`/diaries/${id}`);
