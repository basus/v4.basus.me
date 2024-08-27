import { format } from "npm:date-fns";
import { join } from "jsr:@std/path";
import * as util from "./util.ts";


const template = `

<blockquote class="post-quote"
            cite="url">
  quotation
</blockquote>

<p>
  author in <cite><a href="url">attribution</a></cite>
</p>
`

export default function () {
    let path = util.getNewPostPath(util.SRC_STREAM);
    path = join(util.STREAM, path);

    return {
        path: path,
        content: {
            post_type: "quote",
            date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxxx"),
            content: template
        }
    }
}
