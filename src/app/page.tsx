import Link from "next/link";

export default function Homepage() {
    return (
        <main className="max-w-full h-full w-full max-h-[100vh] overflow-auto">
            <div className={`p-3 w-full text-center`}>
                <img
                    src={`/static/images/tahiti_logo_title.png`}
                    alt={`Logo`}
                    className={`mx-auto max-w-full w-40 mt-20 rounded-2xl`}
                />
                <h1 className={`text-5xl text-center font-semibold pt-20`}>
                    Welcome to Tahiti Gaming
                </h1>
                <h2 className={`text-xl text-center pt-20`}>
                    This page is under construction, bear with us and join us on
                    Discord
                </h2>
                <p className={`h-32 w-full`} />
                <Link
                    href={`https://discord.gg/aWm7EaXPh4`}
                    className={`mx-auto p-4 w-fit text-center rounded-lg flex flex-row space-x-2 items-center justify-center bg-[#7289da]`}
                >
                    <i className={`fab fa-discord`} />
                    <span>Go to Discord</span>
                </Link>
            </div>
        </main>
    );
}
