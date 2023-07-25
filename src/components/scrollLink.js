import { useEffect, useRef } from "react";
import Link from "next/link";

const ScrollLink = ({ href, scrollToId, children }) => {
  return (
    <Link href={`/bible${href}${scrollToId}`}>
      <span style={{ color: "blue" }}>{children}</span>
    </Link>
  );
};

export default ScrollLink;
