export type DestinationId = number;

export type DestinationEntity = {
  id: DestinationId;
  name: string;
  isFeatured: boolean;
  hasChildren: boolean;
  childs: DestinationEntity[];
};
