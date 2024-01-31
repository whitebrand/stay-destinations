import { useQuery } from '@tanstack/react-query';
import DestinationsGateway from '../infrastructure/gateways/V1/EstablishmentsGateway/DestinationsGateway';

const useDestinationsList = () => 
  useQuery({ queryKey: ['destinations'], queryFn: () =>
    DestinationsGateway.getDestinations(),
  });

export default useDestinationsList;
