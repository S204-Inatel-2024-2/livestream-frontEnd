import { auth } from "@/auth"
import { liveStreamSchema } from "@/src/app/lib/zod"
import Player from "@/src/app/ui/player"
import { redirect } from "next/navigation"
import styles from "./index.module.css"
import ToggleButton from "./toggleButton"
import Link from "next/link"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }

    const id = (await params).id
    const response = await fetch(`${process.env.API_URL}/livestreams/info/${id}`)
    const data = await response.json()

    const livestream = await liveStreamSchema.parseAsync(data["livestream"])
    if (livestream.publisher_id !== session.user?.id) {
        redirect("/dashboard")
    }

    return (
        <div className={styles.configContainer}>
            <h2 className={styles.configTitle}>Configurações da Live</h2>
            <div className={styles.streamInfo}>
                <p><strong>Id:</strong> {livestream.id}</p>
                <p><strong>Nome:</strong> {livestream.name}</p>
                <p><strong>Stream Key:</strong> {livestream.stream_key}</p>
                <p><strong>Status:</strong> {livestream.live_stream_status ? "Ativa" : "Inativa"}</p>

                <form action={async () => {
                    "use server"
                    await fetch(`${process.env.API_URL}/livestreams/delete/${id}`, {
                        method: "DELETE",
                    })

                    redirect("/profile")
                }}>
                    <button className="btn" style={{borderRadius: "8px"}}>Delete Stream</button>
                    <Link href={"/"} className="btn" style={{borderRadius: "8px"}}>Dashboard</Link>
                </form>
            </div>

            <div className={styles.playerContainer}>
                <Player
                    thumbnail={livestream.thumbnail}
                    techOrder={["html5"]}
                    autoplay={false}
                    controls={true}
                    sources={livestream.live_stream_status ? [{ src: `${process.env.NEXT_PUBLIC_API_URL}/hls/${livestream.id}.m3u8`, type: "application/x-mpegURL" }] : []}
                />
            </div>

            <ToggleButton
                serverAction={async () => {
                    "use server"
                    await fetch(`${process.env.API_URL}/livestreams/update/${id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ live_stream_status: !livestream.live_stream_status }),
                    })
                }}
                status={livestream.live_stream_status}
            />
        </div>
    )
}
