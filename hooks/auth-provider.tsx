import { createContext, useState } from 'react';

export const AuthContext = createContext<any>({});

type Props = {
  children: JSX.Element;
};
export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
