import lume from "lume/mod.ts";

export default function* ({ search }) {

  for (const tag of search.values("tags")) {
    const entries = search.pages(`"${tag}"`, "date=desc");
    yield {
      subsection: "tags",
      url: `/journal/tags/${tag}/`,
      layout : "layouts/tag-page.vto",
      title: tag,
      entries: entries, }
  }
}
