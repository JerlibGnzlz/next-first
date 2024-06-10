import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Pagina Contact",
    description: "Description",
}



export default function Contact() {
    return (
        <>
            <span className="text-lg font-bold text-orange-500 mt-3 p-4">Contact</span>
        </>
    )
}
