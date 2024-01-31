import { TranslatableName, Coordinates } from '../types';

type DestinationData = {
  translatableName: TranslatableName;
  photographs: string[];
  coordinates: Coordinates;
};

export type Destination = {
  id: string;
  childs?: Destination[];
  destinationData: DestinationData;
  fatherDestination?: string;
  isTop: boolean;
  isFinalNode: boolean;
  numEstablishments: number;
};
