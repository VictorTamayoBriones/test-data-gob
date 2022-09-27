import axios from "axios"

export const getDataGob = async () =>{
    try{
        const resDataGob = await axios('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
        return resDataGob.data;

    }catch(err: any){
        return err
    }
}