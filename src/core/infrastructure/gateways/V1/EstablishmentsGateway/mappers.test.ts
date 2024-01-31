import { mapDestination } from './mappers';

// TODO: This must be created by a fixture factory that returns customizable destinations
const DESTINATION_FIXTURE = {
  childs: [],
  destinationData: {
    translatableName: {
      de: 'Dominikanische Republik',
      en: 'Dominican Republic',
      es: 'República Dominicana',
      fr: 'République Dominicaine',
      it: 'Repubblica Dominicana',
      pt: 'República Dominicana',
    },
    coordinates: {
      latitude: 18.4860575,
      longitude: -69.9312117,
    },
    photographs: ['132379'],
  },
  fatherDestination: 0,
  id: 99,
  isTop: true,
  isFinalNode: true,
  numEstablishments: 0,
};

describe('EstablishmentsGateway mappers', () => {
  describe('mapDestination mapper', () => {
    it('maps api destination object to a destination entity', () => {
      const output = mapDestination(DESTINATION_FIXTURE);
  
      expect(output).toEqual({
        id: DESTINATION_FIXTURE.id,
        name: DESTINATION_FIXTURE.destinationData.translatableName.es,
        isFeatured: DESTINATION_FIXTURE.isTop,
        isLastOne: DESTINATION_FIXTURE.isFinalNode,
      });
    });
  });
});
