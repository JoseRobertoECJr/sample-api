import { ISampleService } from "domain/ISampleService";
import { Sample } from "domain/entities/Sample"

export class SampleService implements ISampleService {
    
    constructor() {

    }

    getBy(id: number): Sample {
        return new Sample();
    }

    getListBy(stringProp: string): Array<Sample> {
        return new Array<Sample>();
    }

    create(sample: Sample): Promise<void> {
        return;
    }

    update(id: number, sample: Sample): Promise<void> {
        return;
    }
    
    delete(id: number): Promise<void> {
        return;
    }
}