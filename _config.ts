import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
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

site.use(date());
site.use(slugify_urls());

export default site;
