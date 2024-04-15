interface Pipe {
    <A>(value: A): A;
    <A, B>(value: A, fn1: (input: A) => B): B;
    <A, B, C>(value: A, fn1: (input: A) => B, fn2: (input: B) => C): C;
    <A, B, C, D>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D
    ): D;
    <A, B, C, D, E>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E
    ): E;
}

export const pipe: Pipe = (value: any, ...fns: Function[]): unknown => {
    return fns.reduce((acc, fn) => fn(acc), value);
}

export const map =
<A, B>
(f: (a: A, i: number) => B) =>
(as: A[]) =>
    as.map(f)