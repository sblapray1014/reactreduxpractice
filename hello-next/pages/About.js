import Link from "next/link";

export default () => (
  <div>
    <Link href="/" title="About Page">
      <button style={{ backgroundColor: "azure" }}>Back Home</button>
    </Link>
    <p>This is the about page</p>
  </div>
);
