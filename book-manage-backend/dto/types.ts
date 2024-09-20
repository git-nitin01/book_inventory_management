export type bookType = {
    entryId: number,
    isbn: string,
    title: string,
    author: string,
    genre: string,
    publicationDate: Date,
    stock?: number
}

export type stockType = {
  entryId?: number,
  quantity: number
}
