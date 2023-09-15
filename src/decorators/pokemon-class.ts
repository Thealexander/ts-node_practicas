function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else { return (() => { }) }

    //return () => console.log('Holasss');
}

const blockPrototipo = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPkId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('id debe estar entre 1 y 800')
            } else { originalMethod(id) }
        }

        // console.log(target, propertyKey, descriptor)
    }
}

function readonly(isWritable: boolean = true) {
    return function (target: any, propertyK: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return ('alexander')
            },
            set(this, val) {
                Object.defineProperty(this, propertyK, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
    }
}


@blockPrototipo
@printToConsoleConditional(false)
export class Pokemon {
    @readonly(true)
    public publicApi: string = 'https://pokeapi.com'
    constructor(
        public name: string
    ) { }
    @CheckValidPkId()
    savePokemontoDB(id: number) {
        console.log(`Pokemon saved at DB ${id}`)
    }
}