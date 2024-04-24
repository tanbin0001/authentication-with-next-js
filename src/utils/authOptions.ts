import  { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
        clientId: process.env.GITLAB_CLIENT_ID  as string,
        clientSecret: process.env.GITLAB_CLIENT_SECRET as string
      })
  ],
}

 