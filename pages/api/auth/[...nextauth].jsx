import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        return await signInWithEmailAndPassword(
          auth,
          email || "",
          password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return true;
            }
            return false;
          })
          .catch((error) => {
            new Error(error.message);
          });
      },
    }),
  ],
};
export default NextAuth(authOptions);
