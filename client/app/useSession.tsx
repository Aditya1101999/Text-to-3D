import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session } = useSession();

  const handleSignIn = () => signIn();
  const handleSignOut = () => signOut();

  return {
    session,
    handleSignIn,
    handleSignOut,
  };
};
