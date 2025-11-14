import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authservice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [Error,setError] = useState(null);

  useEffect(() => {
    const initUser = async () => {
      try {
        const token = localStorage.getItem('token'); 
        
        if (token) {
          const userData = await authService.getCurrentUser();
          setUser(userData); 
        }
      } catch (error) {
        console.error("initUser error:", error);
        setUser(null); 
      } finally {
        setIsAuthLoading(false); 
      }
    };

    initUser(); 

  }, []); 

  const register = async (userData) => {
    try{
      const response = await authService.register(userData);
      
      localStorage.setItem('token',response.token);
      localStorage.setItem('refresh',response.refresh);
      setUser(response.user);
      // `response` return করা হয় যাতে UI কম্পোনেন্ট সফল রেজিস্ট্রেশনের পর কোনো অ্যাকশন নিতে পারে (যেমন: পেজ রিডাইরেক্ট)
      return response
    } catch(error) {
      // এরর state-এ সেট করা হচ্ছে এবং পুনরায় throw করা হচ্ছে যাতে UI লেয়ারে তা হ্যান্ডেল করা যায়।
      setError(error.message || 'Registration failed');
      throw error;
    }
    
  };


  const login = async (credentials) => {
    try{
      const response = await authService.login(credentials);
      localStorage.setItem('token',response.token);
      localStorage.setItem('refresh',response.refresh);
      setUser(response.user)
      return response;

    } catch (error) {
      setError(error.message || 'Login failed');
      throw error;
    }
  };

  const value = {
    user,
    isAuthLoading,
    register,
    login,
    Error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
