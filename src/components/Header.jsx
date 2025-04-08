import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex p-6 bg-white shadow-md justify-between">
      <div>
        <h1 className="text-2xl font-bold italic">Ride Now</h1>
      </div>
      <SignedOut>
        <SignInButton forceRedirectUrl="/">
          <Button variant="outline" className="cursor-pointer">
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: " w-20 h-20 ",
            },
          }}
        ></UserButton>
      </SignedIn>
    </div>
  );
};

export default Header;
