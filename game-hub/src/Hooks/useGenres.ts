import useData from "./useData";
export interface Gener{
    id: number;
    name:string;
}


const useGeners = () => useData<Gener>('/genres');



export default  useGeners;