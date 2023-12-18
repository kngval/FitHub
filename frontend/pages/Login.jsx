import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <form action="" onSubmit={handleSubmit} className="bg-white p-5 rounded-md max-w-md mx-auto mt-20 shadow-2xl">
  <h2 className="text-2xl font-bold mb-4">Login</h2>

  <label className="block mb-2">Email:</label>
  <input
    type="email"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    className="w-full border border-gray-300 p-2 mb-4 rounded-md"
  />

  <label className="block mb-2">Password:</label>
  <input
    type="password"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    className="w-full border border-gray-300 p-2 mb-4 rounded-md"
  />

  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
    Submit
  </button>
</form>


  );
};

export default Login;
