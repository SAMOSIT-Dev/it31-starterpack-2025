import { useState } from "react";
import "@/styles/login.css";
import { loginUser } from "@/api/auth.service";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (studentId.length !== 11) {
      toast.error("Student ID must be 11 characters long");
      return;
    }
  
    try {
      await loginUser({
        id: studentId,
        password: password,
      });
      navigate("/profile");
  
    } catch (err) {
      toast.error("Invalid student ID or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-gradient min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 gap-8 text-white">
        <div className="w-full hidden md:flex md:w-1/2 justify-center">
          <img
            src="/common/login_Banner.png"
            alt="Login Decoration"
            className="rounded-2xl w-full max-w-lg"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-sm text-center">
          <img
            src="/common/fox_mascot2.png"
            alt="Fox Mascot"
            className="scale-75 md:hidden mb-4 mx-auto"
          />
          <p className="font-inter text-lg mb-2">Hello IT#31 !</p>
          <h1 className="font-inria-serif text-4xl font-semibold mb-6">Sign In</h1>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center space-y-6 text-left"
          >
            <input
              type="text"
              name="studentId"
              id="studentId"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-[90%] font-inria-serif px-4 py-4 rounded-2xl text-black bg-white focus:outline-none"
              required
            />

            <div className="relative w-[90%]">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full font-inria-serif px-4 py-4 rounded-2xl text-black bg-white focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#a29a9a"
                  >
                    <path
                      d="M2 2L22 22"
                      stroke="#7a7a7a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                      stroke="#7a7a7a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                      stroke="#7a7a7a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <img src="/svg/eye.svg" alt="Show password icon" />
                )}
              </button>
            </div>

            <button
              type="submit"
              style={{ fontFamily: "var(--font-inria-serif)" }}
              className="w-[90%] bg-[#b13c3c] hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
