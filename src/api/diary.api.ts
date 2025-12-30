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

export const getDiaries = async () => {
  const res = await api.get("/diaries");
  return res.data; // 배열
};

export const createDiary = (data: DiaryRequest) =>
  api.post("/diaries", data);

export const updateDiary = (id: number, data: DiaryRequest) =>
  api.put(`/diaries/${id}`, data);

export const deleteDiary = (id: number) =>
  api.delete(`/diaries/${id}`);
