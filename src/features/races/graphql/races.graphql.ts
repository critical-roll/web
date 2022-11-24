import { gql } from '@apollo/client';
import { createGraphqlQuery } from '@common/utils';
import type { Race } from '@bff/features/races/race.entity';

export const RacesQuery = createGraphqlQuery<Race[]>(gql`
  query GetRaces {
    race {
      name
    }
  }
`);
