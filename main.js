import { getURLsFromHTML, crawlPage } from "./crawl.js";
import { printReport } from "./report.js";

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error("Please provide exactly one baseURL as an argument.");
    process.exit(1);
  }

  const baseURL = args[0];
  const pages = await crawlPage(baseURL);
  printReport(pages);
}

main();
