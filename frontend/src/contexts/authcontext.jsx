import { createContext, useEffect } from 'react';
import { authService } from '../services/authService';
import { useContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();