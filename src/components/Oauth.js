import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

const Oauth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (err) {
      toast.error("Couldn't autherise with google ");
    }
  };
  return (
    <div className="socilaLogin">
      <p>Sign {location.pathname === "./sing-up" ? "Up" : "In"}</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img src={googleIcon} className="socialIconImg" alt="" />
      </button>
    </div>
  );
};

export default Oauth;
