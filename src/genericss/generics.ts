export const printObjects = (argument: any) => {
    console.log(argument)
}

export function genericFunmction<T>(argument: T): T {
    return argument;
}
export const genericFunctionArrow = <T>(argument: T) => argument;