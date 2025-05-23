import { Children, createContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: (_user: any) => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser]: any = useState(null);

  const signin = (userData: any) => {
    setUser(userData);
  };

  const signout = () => {
    setUser(null);
  };

  const signup = (userData: any) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
