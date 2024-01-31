import HttpInstance from '../../../instances/HttpInstance';
import { Response } from '../types';
import { DestinationEntity } from '../../../../entities/Destination';
import { mapDestination } from './mappers';
import { Destination } from './types';

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
    .then(({ data }) => data.data.map(mapDestination));
    // TODO: map the error and handle it

export default {
  getDestinations,
};
