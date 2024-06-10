import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Pagina About",
    description: "Description",
    icons: { icon: "https://example.com/icon.png", apple: "https://example.com/apple-icon.png" }
}

export default function About() {
    return (
        <>
            <span className="text-lg font-bold text-orange-500 mt-3 p-4">Page About</span>
        </>
    )
}
