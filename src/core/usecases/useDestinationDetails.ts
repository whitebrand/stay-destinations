import { useQuery } from '@tanstack/react-query';
import DestinationsGateway from '../infrastructure/gateways/V1/EstablishmentsGateway/DestinationsGateway';
import { DestinationId } from '../entities/Destination';

type UseDestinationDetailsProps = {
  destinationId: DestinationId;
  delayed: boolean;
};

const useDestinationDetails = ({ destinationId, delayed = false }: UseDestinationDetailsProps) => 
  useQuery({ queryKey: ['destinationDetails', destinationId], queryFn: () =>
    DestinationsGateway.getDestination({ id: destinationId }),
  enabled: !delayed });

export default useDestinationDetails;
