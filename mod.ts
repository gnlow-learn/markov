import { map, pipe } from "./util.ts"

const data = (await Deno.readTextFile("./data.txt")).split(" ")

console.log(
    pipe(
        data.map(datum => /../g.exec(datum)![0]),
        ss => Object.groupBy(ss, s => s),
        Object.entries,
        map(([k, v]) => [k, v.length]),
        ss => Object.groupBy(ss, ([k, v]) => k[0]),
    )
)