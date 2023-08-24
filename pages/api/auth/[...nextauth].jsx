import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXAUTH_SECRET,
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
              let user = {
                id: userCredential.user.reloadUserInfo.localId,
                name: userCredential.user.reloadUserInfo.displayName,
                email: userCredential.user.reloadUserInfo.email,
                image: userCredential.user.reloadUserInfo.photoURL,
              };

              return user;
            }
            return false;
          })
          .catch((error) => {
            new Error(error.message);
          });
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 4 * 60 * 60, //4 saat
  },
};
export default NextAuth(authOptions);
