"use client";
import ScrollLink from "../../components/scrollLink";
export default function Titus() {
  return (
    <div>
      <h1 className="calibre_8" id="filepos14379700">
        <span className="underline1">Titus</span>
      </h1>
      <h2 className="calibre_14">
        <span className="underline1">Chapters</span>
      </h2>
      <h2 className="calibre_14">
        <ScrollLink
          className="calibre3"
          href="/titus-1"
          scrollToId="#filepos14379989"
        >
          1
        </ScrollLink>{" "}
        <ScrollLink
          className="calibre3"
          href="/titus-2"
          scrollToId="#filepos14389837"
        >
          2
        </ScrollLink>{" "}
        <ScrollLink
          className="calibre3"
          href="/titus-3"
          scrollToId="#filepos14396295"
        >
          3
        </ScrollLink>
      </h2>
      <div className="mbp_pagebreak" id="calibre_pb_1262"></div>
    </div>
  );
}
