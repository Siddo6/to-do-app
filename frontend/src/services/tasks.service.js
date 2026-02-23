import { apiFetch } from "./api.js";

function authHeaders() {
    return {Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
}


export async function getTasks({ page = 1, limit = 10, order = "asc" } = {}) {
  return await apiFetch(
    `/tasks?page=${page}&limit=${limit}&order=${order}`,
    { headers: authHeaders() }
  );
}


export async function createTask(taskData) {
    return await apiFetch("/tasks", {
        method:"POST",
        headers: authHeaders(),
        body: JSON.stringify({
            ...taskData,
            dueDate: taskData.dueDate instanceof Date ? taskData.dueDate.toISOString() : taskData.dueDate
        })
    })
    
}


export async function updateTask(taskData) {
    return await apiFetch("/tasks", {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({
            ...taskData, 
            dueDate: taskData.dueDate instanceof Date ? taskData.dueDate.toISOString() : taskData.dueDate
        })
    })
    
}



export async function deleteTask(id) {
  return await apiFetch("/tasks", {
    method: "DELETE",
    headers: authHeaders(),
    body: JSON.stringify({ _id: id }),
  });
}