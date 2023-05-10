import axios from "axios"

const API_BASE_URL = "http://localhost:8082"

    const saveStudent =(student)=>{
        return axios.post(API_BASE_URL + "/student", student)
    }
    const getBookAllStudent =()=>{
        return axios.get(API_BASE_URL + "/student")
    }
    const deleteStudent =(id)=>{
        return axios.delete(API_BASE_URL + "/student/delete/" + id)
    }
    const getStudentById =(id)=>{
        return axios.get(API_BASE_URL + "/student/" + id)
    }
    const updateStudent =(book,id)=>{
        return axios.put(API_BASE_URL + "/student/update/" + id,book)
    }

const     StudentServices = {
        saveStudent,getBookAllStudent,
        updateStudent,getStudentById,deleteStudent
    }

export default StudentServices