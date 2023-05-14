import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';

const mockAppService = {};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    });

    app.overrideProvider(AppService).useValue(mockAppService);

    appController = (await app.compile()).get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello world');
    });
  });
});
