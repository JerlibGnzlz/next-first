import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Pagina Pricing",
    description: "Description",
}


export default function PricingPage() {
    return (
        <>
            <span className="text-lg font-bold text-orange-500 mt-3 p-4">PricingPage</span>
        </>
    )
}
