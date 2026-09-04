import z from "zod"

const urlValidator = z.url()

export type Url = z.infer<typeof urlValidator>
