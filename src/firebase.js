import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPeymu_6dTDHIjrP2vqkF6b_Jkz9nsO2E",
    authDomain: "crm-frontend-fc941.firebaseapp.com",
    projectId: "crm-frontend-fc941",
    storageBucket: "crm-frontend-fc941.appspot.com",
    messagingSenderId: "11137113584",
    appId: "1:11137113584:web:5f7c82eb775b8f9a685135"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);