// TODO: i know i can create an @alias for cleaner paths
import { getTranslatableName } from '../../../../../utils/i18n';
import { Mapper } from '../../../../../utils/types/mapper.types';
import { DestinationEntity } from '../../../../entities/Destination';
import { Destination } from './types';

export const mapDestinationsList: Mapper<Destination[], DestinationEntity[]> = input => input.map(mapDestination);

export const mapDestination: Mapper<Destination, DestinationEntity> = input => ({
  id: input.id,
  name: getTranslatableName(input.destinationData.translatableName),
  isFeatured: input.isTop,
  hasChildren: !input.isFinalNode,
  childs: input.childs && input.childs.length > 0 ? mapDestinationsList(input.childs) : [],
});
