import * as path from "jsr:@std/path";
import { sprintf } from "jsr:@std/fmt/printf";

export const STREAM = "stream/";
export const SRC_STREAM = "src/stream/";

// Write the path of the new file to a hidden file so that other programs can
// use it easily
export const NEW_FILE_PATH=".new-file-path"

// Get the latest entry in the directory by treating the name as number. Does
// not differentiate between files and folders.
//
// Returns undefined if it can't figure out what the latest is.

export function getLatestInDir (directory: string) : Deno.DirEntry | undefined {

    const entries =  Deno.readDirSync(directory);
    let latest = 0;
    let latestEntry = undefined;

    for (const entry of entries) {
        const year = Number(path.parse(entry.name).name);
        if ((year) && (year > latest)) {
            latest = year;
            latestEntry = entry;
        }
    }

    return latestEntry;
}

// Get the path for a new stream post, based on the given root.
// This assumes that the folder structure is `root/year/month/<number.vto>`
// Throws an error if the new file path cannot be figured out.
export function getNewPostPath(root : string) {
    const latestYear = getLatestInDir(root);

    if (latestYear === undefined) { throw Deno.errors.NotFound; }

    const yearDir = path.join(root, latestYear.name)
    const latestMonth = getLatestInDir(yearDir);

    if (latestMonth === undefined) { throw Deno.errors.NotFound; }

    const location = path.join(yearDir, latestMonth.name);
    const latestFile = getLatestInDir(location);

    if (latestFile === undefined) { throw Deno.errors.NotFound; }

    const newFileNumber = 1 + Number( path.parse(latestFile.name).name );
    const newFileName = sprintf("%03d.vto", newFileNumber);
    const newFilePath = path.join(location, newFileName);

    // Write the generated path to a file for other programs
    const pathData = new TextEncoder().encode(newFilePath);
    Deno.writeFileSync(NEW_FILE_PATH, pathData);

    // Return the new file path relative to the given root
    const relative = path.relative(root, newFilePath);
    return relative;
}
