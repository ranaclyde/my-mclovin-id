// Get element from dom by selector string
export const $ = <T>(
  selector: string,
  context: Document | HTMLElement = document
): T => context.querySelector(selector) as T
