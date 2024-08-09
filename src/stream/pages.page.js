export const layout = "layouts/stream/page.vto";

// TODO: find a way to read this out the _data.yml
const postTypes = [ "fleet", "link", "quote", "images", "video" ];

function* makeTypePages({ search, paginate }) {

  for (const postType of postTypes) {

    const condition = `section=stream basename!=index post_type=${postType}`;
    const posts = search.pages(condition, "date=desc");
    const options = {
      url: (n) => `/stream/${postType}/${n}/`,
      size: 10,
    };

    for (const page of paginate(posts, options)) {
      yield page;
    }

    // Finally build the index page
    const indexPage = search.page(`section=stream basename=index post_type=${postType}`);

    if (!indexPage) {
      const condition = `section=stream basename!=index post_type=${postType}`;
      yield {
        url: `/stream/${postType}/index.html`,
        content: "hello, world!",
        results: search.pages(condition, "date=desc", 10),
        layout: layout,
        pagination : {
          previous : "",
          next: "/stream/${postType}/2",
        }
      }
    }
  }
}

function* makeStreamPages({ search, paginate }) {
  const posts = search.pages("section=stream basename!=index", "date=desc");
  const options = {
    url: (n) => `/stream/page/${n}/`,
    size: 10,
  };

  for (const page of paginate(posts, options)) {
    yield page;
  }
}


export default function* ({ search, paginate }) {
  yield* makeStreamPages({ search, paginate });
  yield* makeTypePages({ search, paginate });
}
