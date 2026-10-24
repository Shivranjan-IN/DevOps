import {client} from "@repo/db/client";

export default async function Home() {
    const user = await client.user.findFirst({})
    return (
        <div>
           {user?.username}
           <br />
           {user?.email}
           <br />
           {user?.password}
        </div>
    )
}         