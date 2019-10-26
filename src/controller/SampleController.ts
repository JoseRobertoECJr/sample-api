import { SampleObject } from "./request/SampleObject";

export class SampleController {

    constructor() {

    }

    public doSomething(defautParam: string) {
        return defautParam;
    }

    public doAnotherThing(sampleObject: SampleObject) {
        return sampleObject
    }
}