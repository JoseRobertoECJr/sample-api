import { Sample } from "./entities/Sample";

export interface ISampleService {
    getBy(id: number): Sample;
    getListBy(stringProp: string): Array<Sample>;
    create(sample: Sample): Promise<void>;
    update(id: number, sample: Sample): Promise<void>;
    delete(id: number): Promise<void>;
}