import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import { checkUser } from "@/lib/CheckUser";
import { HeartIcon, LayoutDashboard } from "lucide-react";

const Header = async () => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";
  console.log(user);
  return (
    <div className="flex p-6 bg-white shadow-md justify-between ">
      <div>
        <h1 className="text-2xl font-bold italic">Ride Now</h1>
      </div>
      <div className="mx-4 flex   gap-3">
        {user && (
          <>
            <Button className="cursor-pointer w-32">
              <HeartIcon />
              Favorite
            </Button>
            {isAdmin ? (
              <Button variant={"secondary"} className="cursor-pointer">
                <LayoutDashboard />
                Admin
              </Button>
            ) : (
              <Button variant={"secondary"} className="cursor-pointer">
                <LayoutDashboard />
                view
              </Button>
            )}
          </>
        )}
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
    </div>
  );
};

export default Header;
