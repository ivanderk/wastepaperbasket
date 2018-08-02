import { RequestP } from 'request/api/request.interface';

export class RequestDto implements RequestP {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: string,
    public readonly creationDate: Date,
  ) {}
}