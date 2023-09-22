import Head from "next/head";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url("/background.png")` }}
    >
      <Head>
        <title>SwiftSpace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full max-w-2xl lex-1 p-4 text-center h-full">
        <div className="bg-sky-200 rounded-2xl shadow-2xl flex w-full">
          <div className="w-full">
            <span className="font-bold text-3xl text-start font-mono bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-red-400 to-teal-400 animate-text">
              SwiftSpace
            </span>
            <h2 className="text-2xl mb-2 font-bold text-cyan-700 my-8">
              Sign in
            </h2>
            <div className="border-2 w-10  border-cyan-700 inline-block mb-2"></div>
            <div className="flex justify-center my-2 gap-2">
              <a href="#" className="border-2 border-gray-200 p-4 rounded-full">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="border-2 border-gray-200 p-4 rounded-full">
                <FcGoogle className="text-xl" />
              </a>
              <a href="#" className="border-2 border-gray-200 p-4 rounded-full">
                <SiDiscord className="text-xl" />
              </a>
            </div>
            <p className="text-sm mb-2 text-gray-400 my-4">
              or use your email account
            </p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-3 flex gap-2 align-center mb-4">
                <FaRegEnvelope className="text-gray-400 text-xl" />
                <input
                  type="email"
                  className="bg-gray-100 text-sm outline-none text-gray-500"
                  placeholder="Email"
                />
              </div>
              <div className="bg-gray-100 w-64 p-3 flex gap-2 align-center">
                <MdLockOutline className="text-gray-400 text-xl" />
                <input
                  type="password"
                  className="bg-gray-100 text-sm outline-none text-gray-500"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between w-64 my-2">
                <label className="text-xs">
                  <input
                    type="checkbox"
                    className="text-sm"
                    placeholder="Password"
                  />{" "}
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              <a
                href="#"
                className="border-2 border-cyan-700 text-cyan-700 rounded-full px-10 py-1.5 inline-block mt-2 transition-all hover:bg-cyan-700 hover:text-white"
              >
                Sign In
              </a>
            </div>
          </div>
          <div className="w-2/5 p-5 bg-sky-900 text-sky-200 rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-lg mb-2 font-bold">
              Welcome to the community!
            </h2>
            <div className="border-2 w-10  border-sky-200 inline-block mb-2"></div>
            <p className="text-sm mb-2 text-sky-200">
              Don't have an account? Sign up now and get started!
            </p>
            <a
              href="#"
              className="border-2 border-sky-200 rounded-full px-10 py-1.5 inline-block mt-2 transition-all hover:bg-sky-200 hover:text-sky-900"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
