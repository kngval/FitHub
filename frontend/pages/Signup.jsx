import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loading, error, success } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-md max-w-md mx-auto mt-20 shadow-2xl"
    >
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <label className="block mb-2">Email:</label>
      <input
        className="w-full border border-gray-300 p-2 mb-4 rounded-md"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label className="block mb-2">Password:</label>
      <input
        className="w-full border border-gray-300 p-2 mb-4 rounded-md"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        type="submit"
      >
        Submit
      </button>
      {error && (
        <div className="w-full border-red bg-red-100 text-lg p-4 rounded-md mt-3">
          {error}
        </div>
      )}
      {success && (
        <div className="w-full border-red bg-blue-100 text-lg p-4 rounded-md mt-3">
          {success}
        </div>
      )}
    </form>
  );
};

export default Signup;
