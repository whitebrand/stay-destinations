import HttpInstance from '../../../instances/HttpInstance';
import { Response } from '../types';
import { DestinationEntity, DestinationId } from '../../../../entities/Destination';
import { mapDestinationsList } from './mappers';
import { Destination } from './types';
import { flattenTreeArray } from '../../../../../utils/helpers';

type GetDestinationsResponse = Response<Destination[]>;

/* 
 * NOTE: in a real scenario we must have pagination to manage a huge amount of items 
 * so in that case a proper way to handle this is creating a new PaginatedResponse<Destination> type like:
 * 
 * type PaginatedResponse<T> = {
 *   resources: T[],
 *   pages: number,  // Number of pages available to navigate
 *   currentPage: number,
 *   total: number,  // Number of items
 *   perPage: number, // Number of items per page (optional)
 * }
**/

const getDestinations = async (): Promise<DestinationEntity[]> => 
  HttpInstance.get<GetDestinationsResponse>('/v1/establishments/destinations')
    .then(({ data }) => mapDestinationsList(data.data));
    // TODO: map the error and handle it

type GetDestinationProps = {
  id: DestinationId;
}

const getDestination = async ({ id }: GetDestinationProps): Promise<DestinationEntity> =>
  // NOTE: This is a workaround that simulates a resource search. 
  // In hexagonal architecture a resource is fetch by a specific resource path.
  // Example: /v1/destinations/{destinationId}
  getDestinations()
    .then(destinations => flattenTreeArray(destinations, 'childs'))
    .then(destinations => {
      const found = destinations.find(destination => destination.id === id);

      if (!found) {
        throw new Error('Destination not found');
      }

      return found;
    });


export default {
  getDestinations,
  getDestination,
};
