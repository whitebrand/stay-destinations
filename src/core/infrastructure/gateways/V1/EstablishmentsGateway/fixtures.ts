import { Destination, DestinationId } from './types';

type CreateDestinationFixtureProps = {
  id: DestinationId;
  config?: Omit<Partial<Destination>, 'id'>;
};

export const createDestinationFixture = ({ id, config }: CreateDestinationFixtureProps): Destination => {
  return {
    childs: [],
    destinationData: {
      translatableName: {
        de: `Translated Name ${id} (DE)`,
        en: `Translated Name ${id} (EN)`,
        es: `Translated Name ${id} (ES)`,
        fr: `Translated Name ${id} (FR)`,
        it: `Translated Name ${id} (IT)`,
        pt: `Translated Name ${id} (PT)`,
      },
      coordinates: {
        latitude: 12.3456789,
        longitude: -12.3456789,
      },
      photographs: ['1111', '2222', '3333'],
    },
    fatherDestination: 0,
    id,
    isTop: true,
    isFinalNode: true,
    numEstablishments: 0,
    ...config,
  };
};
