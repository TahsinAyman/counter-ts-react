// import { useState } from "react";

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState<string>();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const username = (event.target as HTMLFormElement).username.value;
//     const password = (event.target as HTMLFormElement).password.value;
//     if (username == "admin" && password == "123") {
//       setIsAuthenticated(true);
//       setError(undefined);
//     } else {
//       setError("Invalid Credentails");
//       setIsAuthenticated(false);
//     }

//   };

//   return (
//     <div>
//       {isAuthenticated && <h1 data-testid="result">Welcome Admin</h1>}
//       {error && (
//         <h1 data-testid="result" style={{ color: "red" }}>
//           {error}
//         </h1>
//       )}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="username"
//           data-testid="username"
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           data-testid="password"
//         />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

export default function App() {
  return <h1>Mello</h1>;
}

