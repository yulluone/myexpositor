"use client";
import ScrollLink from "../../components/scrollLink";
export default function Jonah() {
  return (
    <div>
      <h1 className="calibre_8" id="filepos10258627">
        <span className="underline1">Jonah</span>
      </h1>
      <h2 className="calibre_14">
        <span className="underline1">Chapters</span>
      </h2>
      <h2 className="calibre_14">
        <ScrollLink
          className="calibre3"
          href="/jonah-01"
          scrollToId="#filepos10258954"
        >
          1
        </ScrollLink>{" "}
        <ScrollLink
          className="calibre3"
          href="/jonah-02"
          scrollToId="#filepos10272459"
        >
          2
        </ScrollLink>{" "}
        <ScrollLink
          className="calibre3"
          href="/jonah-03"
          scrollToId="#filepos10280766"
        >
          3
        </ScrollLink>{" "}
        <ScrollLink
          className="calibre3"
          href="/jonah-04"
          scrollToId="#filepos10290498"
        >
          4
        </ScrollLink>
      </h2>
      <div className="mbp_pagebreak" id="calibre_pb_971"></div>
    </div>
  );
}
