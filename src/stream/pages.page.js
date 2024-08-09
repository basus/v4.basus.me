export const layout = "layouts/stream/page.vto";

// TODO: find a way to read this out the _data.yml
const postTypes = [ "fleet", "link", "quote", "image", "video" ];

// Paginate each type of post individually
function* makeTypePages({ search, paginate }) {

  for (const postType of postTypes) {

    // First generate all the paginated pages, pluralizing the name of the type
    const condition = `section=stream basename!=index post_type=${postType}`;
    const posts = search.pages(condition, "date=desc");
    const options = {
      url: (n) => `/stream/${postType}s/${n}/`,
      size: 10,
    };

    for (const page of paginate(posts, options)) {
      page.subsection = `${postType}s`;
      yield page;
    }

    // Finally build the index page if it doesn't exist already
    const indexPage = search.page(`section=stream basename=index post_type=${postType}`);

    if (!indexPage) {
      const condition = `section=stream basename!=index post_type=${postType}`;
      yield {
        url: `/stream/${postType}s/index.html`,
        title: `stream / ${postType}`,
        results: search.pages(condition, "date=desc", 10),
        layout: layout,
        subsection : `${postType}s`,
        pagination : {
          previous : "",
          next: `/stream/${postType}s/2`,
        }
      }
    }
  }
}


// Paginate the stream, 10 posts per page, might want to increase the number
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
