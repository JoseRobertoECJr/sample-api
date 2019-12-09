import { Request, Response, NextFunction } from "express";
import  {   interfaces, controller, request,    requestParam,
            httpGet,    httpPost,   httpPut,    httpDelete, response } from "inversify-express-utils";
import { inject } from "inversify";
import { Domain } from '../types'
import { ISampleService } from "domain/ISampleService";
import { Sample } from "../domain/entities/Sample";
 
@controller("/sample")
export class SampleController implements interfaces.Controller {

    @inject(Domain.SampleService) private sampleService: ISampleService

    @httpGet("/:id")
    private getBy(@requestParam("id") id: number, req: Request, res: Response, next: NextFunction): Sample {
        return this.sampleService.getBy(id);
    }

    @httpGet("/")
    private getListBy(@requestParam("stringProp") stringProp: string): Array<Sample> {
        return this.sampleService.getListBy(stringProp);
    }

    @httpPost("/")
    private async create(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            await this.sampleService.create(req.body);
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpPut("/:id")
    private async update(@requestParam("id") id: number, @request() req: Request, @response() res: Response): Promise<void> {
        try {
            await this.sampleService.update(id, req.body);
            res.sendStatus(204);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpDelete("/:id")
    private async delete(@requestParam("id") id: number, @response() res: Response): Promise<void> {
        try {
            await this.sampleService.delete(id);
            res.sendStatus(204);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

}