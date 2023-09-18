import Head from "next/head";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();
    const pathObj = { "/": "Home", "/about": "About" };
    return (
        <>
            <Head>
                <title>{`${pathObj[router.pathname]} | Next Movie`}</title>
            </Head>
            <NavBar />
            <div>{children}</div>
        </>
    );
}
