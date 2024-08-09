import { format } from "npm:date-fns";
import { join } from "jsr:@std/path";
import * as util from "./util.ts";


const template = `
{{ import {link} from "layouts/stream/functions.vto" }}
{{ link(uri, title, url) }}
`

export default function () {
    let path = util.getNewPostPath(util.SRC_STREAM);
    path = join(util.STREAM, path);

    return {
        path: path,
        content: {
            post_type: "link",
            date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxxx"),
            uri: "",
            title: "",
            content: template
        }
    }
}
