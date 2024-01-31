import { renderHook, waitFor } from '@testing-library/react-native';
import useDestinationsList from './useDestinationsList';
import DestinationsGateway from '../infrastructure/gateways/V1/EstablishmentsGateway/DestinationsGateway';
import QueryHookWrapper from '../../utils/test/QueryHookWrapper';

describe('useDestinationsList hook', () => {
  it('calls the getDestinations gateway method', async () => {
    const FAKE_GET_DESTINATIONS_RESPONSE = [{ id: 1, name: 'example', isFeatured: false, isLastOne: false }];
    const mockGetDestinations = jest.fn();
    
    jest.spyOn(DestinationsGateway, 'getDestinations').mockImplementation(mockGetDestinations).mockResolvedValue(FAKE_GET_DESTINATIONS_RESPONSE);
    
    const { result } = renderHook(() => useDestinationsList(), { wrapper: QueryHookWrapper });

    await waitFor(() => expect(result.current.isSuccess).toEqual(true));
    await waitFor(() => expect(result.current.data).toEqual(FAKE_GET_DESTINATIONS_RESPONSE));
  });
});
