import { CreateCat.Dto } from './create-cat.dto';

describe('CreateCat.Dto', () => {
  it('should be defined', () => {
    expect(new CreateCat.Dto()).toBeDefined();
  });
});
