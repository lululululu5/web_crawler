function printReport(pages) {
  console.log("Report is starting...");
  const sortPages = sortDictByValue(pages);

  for (let key of Object.keys(sortPages)) {
    console.log(`Found ${sortPages[key]} internal links to ${key}`);
  }

  //   return sortPages;
}

function sortDictByValue(dict) {
  return Object.keys(dict)
    .sort((a, b) => dict[b] - dict[a])
    .reduce((acc, key) => {
      acc[key] = dict[key];
      return acc;
    }, {});
}

export { printReport };
