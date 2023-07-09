import { marked } from "marked";

export function useSharedFunctions() {
  const convertDateToMonthYear = (dateToConvert) => {
    return new Date(dateToConvert).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
    });
  };

  const parseMarkdown = (markdown) => {
    marked.use({
      mangle: false,
      headerIds: false,
    });

    return marked.parse(markdown);
  };

  return { convertDateToMonthYear, parseMarkdown };
}
