import React from 'react';
import Routes from './src/Routes';
import UserProvider from "./src/contexts/useUserContext";

export default function App() {
  return (
    <UserProvider>
      <Routes>
      </Routes>
    </UserProvider>
  );
}
