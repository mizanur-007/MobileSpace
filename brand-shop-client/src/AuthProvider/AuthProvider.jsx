import React, { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brandName, setBrandName] = useState("");

    useEffect(()=>{
      setLoading(true)
      fetch("https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products")
      .then(res=> res.json())
      .then(data => setProducts(data))

    },[])

  // email login
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login with email
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   google login 
const googleLogin = ()=>{
  setLoading(true)
    return signInWithPopup(auth, provider);
}
//   github login 
const githubLogin = ()=>{
  setLoading(true)
    return signInWithPopup(auth, githubProvider);
}

  // observer 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);


//   signout 

const signout = ()=>{
    return signOut(auth);
}

// updata name image 
const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

//handle brand Name 
const handleBrand = (brand_name)=>{
setBrandName(brand_name);
}


  const authinfo = {
    createUser,
    loginWithEmail,
    signout,
    handleUpdateProfile,
    googleLogin,
    githubLogin,
    user,
    products,
    loading,
    handleBrand,
    brandName
  };
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
