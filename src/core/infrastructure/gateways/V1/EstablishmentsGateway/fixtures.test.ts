import { createDestinationFixture } from './fixtures';

describe('createDestinationFixture function', () => {
  it('creates a destination object with the specified ID', () => {
    const output = createDestinationFixture({ id: 1 });

    expect(output).toEqual({
      childs: [],
      destinationData: {
        translatableName: {
          de: `Translated Name 1 (DE)`,
          en: `Translated Name 1 (EN)`,
          es: `Translated Name 1 (ES)`,
          fr: `Translated Name 1 (FR)`,
          it: `Translated Name 1 (IT)`,
          pt: `Translated Name 1 (PT)`,
        },
        coordinates: {
          latitude: 12.3456789,
          longitude: -12.3456789,
        },
        photographs: ['1111', '2222', '3333'],
      },
      fatherDestination: 0,
      id: 1,
      isTop: true,
      isFinalNode: true,
      numEstablishments: 0,
    });
  });
});
