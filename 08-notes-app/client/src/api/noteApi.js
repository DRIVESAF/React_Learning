import axiosInstance from "./axiosInstance";
//创建笔记
export const createNote = async (noteData) => {
  return axiosInstance.post("/notes", noteData);
};
// 查询某个用户的所有笔记
export const getNotes = async (userId) => {
  return axiosInstance.get(`/notes/user/${userId}`);
};

//获取笔记详情
export const getNote = async (noteId) => {
  return axiosInstance.get(`/notes/${noteId}`);
};
// 查询某个用户某个分类的所有笔记
export const getNotesByCategory = async (userId, categoryId) => {
  return axiosInstance.get(`/notes/categories/${userId}/${categoryId}`);
};

//更新笔记
export const updateNote = async (noteId, noteData) => {
  return axiosInstance.put(`/notes/${noteId}`, noteData);
};

//删除笔记
export const deleteNote = async (noteId) => {
  return axiosInstance.delete(`/notes/${noteId}`);
};

// 前端 api/noteApi.js
export const getNotesByCategories = async (userId) => {
  const response = await axiosInstance.get(`/notes/categories/stats/${userId}`);
  return response.data; // 明确返回 data
};
