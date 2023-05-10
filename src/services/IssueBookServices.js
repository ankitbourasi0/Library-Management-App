import axios from "axios"

const API_BASE_URL = "http://localhost:8082/"

  const   saveIssueBook =( bookName,issueDate,studentName)=>{
        return axios.post(API_BASE_URL + bookName +"/issue/" +issueDate+ "/" + studentName)
    }
   const  getAllIssuedBook =()=>{
        return axios.get(API_BASE_URL + "getaAllIssued")
    }
   const getAllReturnedBook =(id)=>{
        return axios.get(API_BASE_URL + "getReturnedBook")
    }
  const  ReturnIssuedBook =(id)=>{
        return axios.delete(API_BASE_URL + "return/" + id)
    }
  
const IssueBookServices = {
    saveIssueBook,getAllIssuedBook,getAllReturnedBook,ReturnIssuedBook
}

export default IssueBookServices