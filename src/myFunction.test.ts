import { handler } from './myFunction';

describe('handler', () => {
    it('should return a successful response', async () => {
    
        const response = await handler();
          expect(response).toEqual('Hello world');
    });
});
