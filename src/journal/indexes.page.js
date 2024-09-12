// This file generates index pages for years and months

function* makeYearPages(search, paginate) {
  const entries = search.pages("section=journal basename!=index", "date=desc");
  const layout = "layouts/journal/year.vto";
  const byYear = {};

  for (const entry of entries) {
    const year = entry.date.getFullYear();
    if (byYear[year] === undefined) {
      byYear[year] = [];
    }
    byYear[year].push(entry);
  }

  for (const year in byYear) {
    yield {
      year: year,
      index: "year",
      generated: true,
      count: byYear[year].length,
      url: `/journal/${year}/index.html`,
      title: `journal / ${year}`,
      results: byYear[year],
      layout: layout,
      subsection : `${year}`
    }
  }
}

export default function*({ search, paginate}) {
  yield* makeYearPages(search, paginate);
}
