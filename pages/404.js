import Link from "next/link";
import Layout from "../components/layout";

export default function Custom404() {
    return (
    <Layout>
        <h1 className="center-txt">We're Sorry The Page is Not Found</h1>
        <h1 className="center-txt">404</h1>
        <div className="container-btn">
            <Link href="/">
            <p className="btn-home">
                Home
            </p>
            </Link>
        </div>
    </Layout>
    );
  }