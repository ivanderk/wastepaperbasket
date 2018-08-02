import { RequestDto } from 'request/dto/request.dto';
import { RequestP } from 'request/api/request.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from './request.entity';

@Injectable()
export class RequestService {

  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  public saveRequest(request: Request): Promise<Request> {
    return this.requestRepository.save(request);
  }

  public findRequest(id: string): Promise<Request> {
    return this.requestRepository.findOne(id);
  }

  public async findAll(): Promise<Request[]> {
    return await this.requestRepository.find();
  }

}
