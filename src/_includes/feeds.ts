// Feed configurations
//
const items = {
    title: "=title",
    description: "=description",
    published: "=date",
    image: "=cover"
}

const sort = "date=desc";
const limit = 10;

const fs = [];

export const journal_feed = {
    output: ["/feeds/journal.xml"],
    query: "section=journal basename!=index",
    sort: sort,
    limit: limit,
    info : {
        title: "Basus.me / Journal",
        description: "Basu's medium-form journal",
        generator: true,
    },
    items: items
};
fs.push(journal_feed);

export const stream_feed = {
    output: ["/feeds/stream.xml"],
    query: "section=stream basename!=index",
    sort: sort,
    limit: limit,
    info : {
        title: "Basus.me / Stream",
        description: "Basu's short-form stream",
        generator: true,
    },
    items: items
};
fs.push(stream_feed);

// Generate feeds for each post type
const postTypes = [ "fleet", "link", "quote", "image", "video" ];
let feed = undefined;
for (const postType of postTypes) {
    feed = {
        output: [`/feeds/${postType}s.xml`],
        query: `section=stream post_type=${postType} basename!=index`,
        sort: sort,
        limit: limit,
        info : {
            title: `Basus.me / ${postType}s`,
            description: `Basu's ${postType}s`,
            generator: true,
        },
        items: items
    }
    fs.push(feed);
}

export const all_feed = {
    output: ["/feed.xml"],
    query: "section=stream|journal basename!=index generated!=true",
    sort: sort,
    limit: limit,
    info : {
        title: "Basus.me",
        description: "The combined feed for Basus.me",
        generator: true,
    },
    items: items
};
fs.push(all_feed);

export const feeds = fs;
