import { Navbar } from "../components/navbar/Navbar";





export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className=" flex flex-col items-center p-20">
                <h1>Hello Mundo Next</h1>
                {children}
            </main>

        </>
    );
}