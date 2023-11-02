import Link from "next/link";
import Layout from "../components/layout";

export default function Custom500() {
    return (
    <Layout>
        <h1 className="center-txt">We're Sorry Server-side Error Occurred</h1>
        <h1 className="center-txt">500</h1>
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