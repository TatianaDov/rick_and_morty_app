import axios from "axios";
const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
    
  });
  
export function getData(){
  return instance.get()
}

export function getDataPage(page){
  return instance.get(`?page=${page}`)
}

export function getDataInfo(value){
  return instance.get(`?name=${value.name}&status=${value.status}&gender=${value.gender}`)
}
