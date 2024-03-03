const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex  h-screen items-center justify-center bg-slate-100 
          
          text-center dark:bg-blue-900"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
