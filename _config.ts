import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";

const site = lume({
    src : "./src",
    includes: "_includes/",
    location : new URL("https://v4.basus.me/"),
});

// Copy static assets so that I don't have to place them in a separate location
// Copy fonts and CSS
site.copy([".woff", ".woff2",".css" ])

// Copy images files
site.copy([".jpg", ".gif", ".png", ".svg"]);

// Feed configurations
const journal_feed = {
    output: ["/feeds/journal.xml"],
    query: "section=journal basename!=index",
    sort: "date=desc",
    limit: 10,
    info : {
        title: "Basus.me / Journal",
        description: "Shrutarshi Basu's medium-form journal",
        generator: true,
    },
    items: {
        title: "=title",
        description: "=description",
        published: "=date",
        image: "=cover"
    }};

const stream_feed = {
    output: ["/feeds/stream.xml"],
    query: "section=stream basename!=index",
    sort: "date=desc",
    limit: 10,
    info : {
        title: "Basus.me / Stream",
        description: "Shrutarshi Basu's short-form stream",
        generator: true,
    },
    items: {
        title: "=title",
        description: "=description",
        published: "=date",
        image: "=cover"
    }};


site.use(date())
    .use(slugify_urls())
    .use(feed(journal_feed))
    .use(feed(stream_feed))
;

export default site;
