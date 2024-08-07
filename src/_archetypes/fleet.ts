import { format } from "npm:date-fns";
import { join } from "jsr:@std/path";
import * as util from "./util.ts";

export default function () {
    let path = util.getNewPostPath(util.SRC_STREAM);
    path = join(util.STREAM, path);

    return {
        path: path,
        content: {
            post_type: "fleet",
            date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxxx")
        }
    }
}
