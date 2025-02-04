import { Content } from "./content";

describe('Notifications Content', () => {
  it('should be abe to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade')

    expect(content).toBeTruthy()
  });

  it('should not be abe to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Voc')).toThrow()
  });

  it('should not be abe to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow()
  });
})


