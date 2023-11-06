import { supabase } from "../libs/supabaseClient";
import { useSessionContext } from "../hooks/useSession";

export default function Dashboard({ children, title }) {
  const { session } = useSessionContext();
  
  return (
    <>
      <div className="bg-slate-900 w-full text-white">
        <div className="flex justify-between px-5">
          {/* Left section */}
          <div className="inline-flex items-center space-x-4">
            <h3 className="text-2xl font-bold">Telematica Weather Station</h3>
            <a href="/">
              <p>Dashboard</p>
            </a>
            <a href="/forecasting">
              <p>Forecasting</p>
            </a>
          </div>

          {/* Right section */}
          <div className="inline-flex space-x-4 items-center py-4">
            <p>{session.user.email}</p>
            <p 
              className="px-4 py-2 rounded-md bg-slate-100 font-bold text-black cursor-pointer"
              onClick={() => supabase.auth.signOut()}
            >
              Cerrar sesi&oacute;n
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="w-full">
        <div className="px-5 py-4 border-b border-black">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <div className="px-5 py-8">{children}</div>
    </>
  );
}
