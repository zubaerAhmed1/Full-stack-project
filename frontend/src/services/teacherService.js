import api from "./authservice";


export const teacherService = {

async addTeachers(teacherdata) {
    try {
     const response = await api.post('/teacher/',teacherdata,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
       });
       return response.data
    } catch (error) {
        throw new Error('Failed to add teachers.' + error)
    }
},

async getTeachers() {
    try {
        const token = localStorage.getItem('token');
        const response = await api.get("/teacher/",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); 
        return response.data

    } catch (error) {
        throw new Error("Failed to fetched teachers." + error.message)
        
    }
    
}

}