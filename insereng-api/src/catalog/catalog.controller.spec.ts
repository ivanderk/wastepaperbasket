import { Test, TestingModule } from '@nestjs/testing';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import 'jest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './entity/service.entity';

describe('CatalogController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([ServiceEntity])],
      controllers: [CatalogController],
      providers: [CatalogService],
    }).compile();
  });

  describe('Get', () => {
    it('should return list of services not null', () => {
      const catalogController = app.get<CatalogController>(CatalogController);
      expect(catalogController.Get()).not.toBeNull();
    });
  });
});
