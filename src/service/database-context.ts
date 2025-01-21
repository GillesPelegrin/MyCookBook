import { createContext } from 'react';
// import { Database } from '../database/database.types';


export const DatabaseClientContext = createContext<any>({});

// export const useDatabaseClient = () => {
//   const context = useContext(DatabaseClientContext);
//   if (!context) {
//     throw new Error('useDatabaseClient must be used within a DatabaseClientProvider');
//   }
//   return context;
// };