import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotifty";

//* Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);

//kullanıcı oluşturmak için kullanılan yöntem

//navigate i parametre olarak register componentinden aldık.
// başarılı giriş olursa anasayfaya yönlendirecek.
 export const createUser = async (email, password, navigate, displayName) => {
   try {
     let user = await createUserWithEmailAndPassword(auth, email, password);


     //kullanıcı kayıt olur olmaz proflini ismini güncelleme methodu (register sayfasında parametre olarak gönderiliyor.)
     await updateProfile(auth.currentUser, {
       displayName: displayName,
     });

     console.log(user);
      toastSuccessNotify("Üyelik işleminiz Tamamlandı");
     navigate("/")
   } catch (error) {
     console.log(error.message);
   }
 };



// var olan kullanıcının giriş yapması için kullanılan yöntem.
//navigate'i parametre olarak login componentinden aldık.
// başarılı giriş olursa anasayfaya yönlendirecek.
  export const UserLogin = async (email, password,navigate) => {
    try {
      let uselogin = await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
      toastSuccessNotify("Hoşgeldiniz")
      console.log(uselogin);
    } catch (error) {
      console.log(error.message);
    }
  };


  //kullanıcı bilgisini takip eden yöntem
//giriş-çıkış işlemleri için

  export const userObserver = (setCurrentUser)=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email, displayName, photoURL}= user
       setCurrentUser({ email, displayName, photoURL });
      } else {
        /*çıkış yaptığında displayname  gözükmeyecek*/
        setCurrentUser(false)
        console.log("kullanıcı çıkış yaptı")
      }
    });

  }


  // kullanıcı çıkış yaptığında kullanılacak yöntem
// kullanıcıyı navigate ile sign in sayfasına yönlendirdik.
  export const logOut = (navigate) => {
    try {
      signOut(auth);
      navigate("/login")
      toastSuccessNotify("Hoşcakalın");
    } catch (error) {
      console.log(error);
    }
  };


  // google ile giriş yapma
  // google ile giriş enable olmalı
  // proje deploy edildiğinde domain listesine deploy linki eklenmeli (Authentication=settings/Authorized domains ve  add domain yollarını seçerek yapabiliriz)


  export const signUpWithGoogle =(navigate)=>{
    const provider = new GoogleAuthProvider()

    // Açılır pencere ile giriş yapmak için kullanılan yöntem.
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
         navigate("/");
      })
      .catch((error) => {
           console.log(error);
      });

  }


  // kullanıcı mailini unutursa sıfırlama maili için 
  export const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Mail kutunuzu kontrol ediniz!");
       
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        
      });
  };
