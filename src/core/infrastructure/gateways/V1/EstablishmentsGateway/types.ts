import { TranslatableName, Coordinates } from '../types';

type DestinationId = number;

type DestinationData = {
  translatableName: TranslatableName;
  photographs: string[];
  coordinates: Coordinates;
};

export type Destination = {
  id: DestinationId;
  childs?: Destination[];
  destinationData: DestinationData;
  fatherDestination?: DestinationId;
  isTop: boolean;
  isFinalNode: boolean;
  numEstablishments: number;
};
