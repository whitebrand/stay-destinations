import { createDestinationFixture } from './fixtures';
import { mapDestination, mapDestinationsList } from './mappers';

const DESTINATIONS_LIST_FIXTURE = [
  createDestinationFixture({ id: 1 }),
  createDestinationFixture({ id: 2 }),
];

describe('EstablishmentsGateway mappers', () => {
  describe('mapDestination mapper', () => {
    it('maps api destination object to a destination entity', () => {
      const DESTINATION_FIXTURE = DESTINATIONS_LIST_FIXTURE[0];
      const output = mapDestination(DESTINATION_FIXTURE);
  
      expect(output).toEqual({
        id: DESTINATION_FIXTURE.id,
        name: DESTINATION_FIXTURE.destinationData.translatableName.es,
        isFeatured: DESTINATION_FIXTURE.isTop,
        hasChildren: !DESTINATION_FIXTURE.isFinalNode,
        childs: [],
      });
    });
  });

  describe('mapDestinationsList mapper', () => {
    it('maps api destination object array to a destination entity array', () => {
      const output = mapDestinationsList(DESTINATIONS_LIST_FIXTURE);
  
      expect(output).toEqual([
        mapDestination(DESTINATIONS_LIST_FIXTURE[0]),
        mapDestination(DESTINATIONS_LIST_FIXTURE[1]),
      ]);
    });
  });
});
