import { Controller, Body, Post, Get } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestDto } from './dto/request.dto';
import { Request } from './request.entity';

@Controller('request')
export class RequestController {
  constructor(public readonly requestService: RequestService) {}

  @Post()
  async createRequest(@Body() requestDto: RequestDto): Promise<Request> {
    const request = new Request();
    request.name = requestDto.name;
    request.type = requestDto.type;
    request.creationDate = requestDto.creationDate;
    return this.requestService.saveRequest(request);
  }

  @Get()
  async getAllRequests(): Promise<Request[]> {
    return this.requestService.findAll();
  }
}