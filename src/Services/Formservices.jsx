import axios from 'axios'
export class Formservices  {
    static serverurl="http://localhost:8000";
    static getAlluserDetails(){
        let dataurl=`${this.serverurl}/userDetails`
        return axios.get(dataurl)
    }
    static postAdmissionData(formData){
        let dataurl=`${this.serverurl}/postadmission`
        return axios.post(dataurl,formData)
    }
}
