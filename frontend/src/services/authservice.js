import axios from 'axios';
const API_BASE_URL = 'https://ominous-yodel-rw6vgp6wgpr24pp-8000.app.github.dev/api';
const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        'content-type': 'application/json',
    },
}); 

export const authService = {

    async login(credentials){
        try{
            const response = await api.post('/login/',{
                phone: credentials.phone,
                password:credentials.password
            });

            return {
                token: response.data.tokens.access,
                refresh: response.data.tokens.refresh,
                user:{
                    id:response.data.user_id,
                    username:response.data.username
                }
            };

        } catch(error) {
            throw new Error(error.response?.data?.error || 'Login Failed');
        }
    },


    async register(userData) {
        try{
            const response = await api.post('/register/',{
                username:userData.username,
                password:userData.password,
                phone:userData.phone || userData.username,
                first_name: userData.firstname,
                last_name:userData.lastname,
            });

            return this.login({
                phone:userData.phone || userData.username,
                password:userData.password,
            });
        } 
        
        catch(error) {
            const errorMessage = error.response?.data?.error || 
                          Object.values(error.response?.data || {}).flat().join(', ') ||
                          'Registration failed';
            throw new Error(errorMessage)
        }
    },

    
   async getCurrentUser(token) {

    try{
       const response = await api.get('/protected/',{
        headers:{
            Authorization: `Bearer ${token}` } })
        return response.data.user    
    
    } catch(error){
        throw new Error('Failed to get User info.')
    }

 }
}

export default api;