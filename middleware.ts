import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// this is for protecting out routes
// this covers routes like /users/dennis/messages
export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
