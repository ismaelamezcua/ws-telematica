import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";

function SignOut() {
  return (
    <>
      <span>Autenticado</span>
      <button onClick={() => supabase.auth.signOut()}>
        Cierra sesi&oacute;n
      </button>
    </>
  );
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {!session ? <Auth /> : <SignOut />}
    </>
  );
}

export default App;
