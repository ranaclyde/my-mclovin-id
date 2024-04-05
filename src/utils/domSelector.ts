// Get element from dom by selector string
export const $ = <T = HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelector(selector) as T
