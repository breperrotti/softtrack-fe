import {SignInButton, UserButton, useUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export const UserBox = () => {

    const {user} = useUser()

    return (
        <>
            {!user && (
                <>
                    <Button>
                        <SignInButton>
                            Log In
                        </SignInButton>
                    </Button>
                </>
            )}
            {user && (
                <div className="flex items-center justify-center gap-x-2">
                    <UserButton appearance={{
                        elements: {
                            avatarBox: "w-10 h-10"
                        }
                    }}/>
                    <p className="font-semibold text-sm">Bem vindo, {user.username}</p>
                </div>
            )}
        </>
    )
}