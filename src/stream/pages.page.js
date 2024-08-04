export const layout = "layouts/stream/page.vto";

export default function* ({ search, paginate }) {
  const posts = search.pages("section=stream basename!=index", "date=desc");
  const options = {
    url: (n) => `/stream/page/${n}/`,
    size: 10,
  };

  for (const page of paginate(posts, options)) {
    yield page;
  }
}
