
'use client'

import { signOut } from "next-auth/react"
export default function Users() {
    return <div>

        Hello User

        <button
            className="border border-black block bg-red-500 mx-5 px-5 py-3 rounded-md mt-5"
            onClick={() => signOut()}>Signout</button>
    </div>

}