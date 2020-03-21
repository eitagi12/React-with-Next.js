import React from "react";
import Link from "next/link";

/// Next.js สามาถกำหนดหน้า ERROR 404 ได้ ///

const errorPage = () => (
  <div>
    <h1>Oops, something went wrong.</h1>
    <p>
      Try{" "}
      <Link href="/">
        <a>going back</a>
      </Link>
      .
    </p>
  </div>
);

export default errorPage;
