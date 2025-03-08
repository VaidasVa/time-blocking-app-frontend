// import React, { createContext, useState, useContext } from 'react';
//
// // Create a context
// const UserContext = createContext();
//
// export const UserProvider = ({ children }) => {
//     const [userId, setUserId] = useState(null); // Start with a null user ID (or fetch it from a server)
//
//     const updateUserId = (newUserId) => {
//         setUserId(newUserId); // Update user ID
//     };
//
//     return (
//         <UserContext.Provider value={{ userId, updateUserId }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
//
// // Custom hook to use the UserContext
// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (!context) {
//         throw new Error("useUser must be used within a UserProvider");
//     }
//     return context;
// };
