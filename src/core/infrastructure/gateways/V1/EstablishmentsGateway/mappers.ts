// TODO: i know i can create an @alias for cleaner paths
import { getTranslatableName } from '../../../../../utils/i18n';
import { Mapper } from '../../../../../utils/types/mapper.types';
import { DestinationEntity } from '../../../../entities/Destination';
import { Destination } from './types';

export const mapDestination: Mapper<Destination, DestinationEntity> = input => ({
  id: input.id,
  name: getTranslatableName(input.destinationData.translatableName),
  isFeatured: input.isTop,
  isLastOne: input.isFinalNode,
});
