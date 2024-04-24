import  { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions:NextAuthOptions = {

  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID  as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
}

console.log(process.env.GITHUB_CLIENT_ID,'77777777777777777777',process.env.GITHUB_CLIENT_SECRET ,'--------------',process.env.NEXTAUTH_SECRET);
 