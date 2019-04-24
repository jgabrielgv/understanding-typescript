namespace MyMath {
    // nested namespaces can also be created
    export namespace Circle {
        const PI = 3.14;

        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }
    }
}
