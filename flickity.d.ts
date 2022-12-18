declare module 'flickity' {
  const Flickity: {
    new (el: string | HTMLElement, options?: Record<string, unknown>): this
    append(element: HTMLElement)
    destroy()
    select(id: string | number)
  }
  export = Flickity
}
