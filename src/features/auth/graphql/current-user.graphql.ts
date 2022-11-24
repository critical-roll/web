import { gql } from '@apollo/client';
import { createGraphqlQuery } from '@common/utils';
import type { UserSession } from '@bff/features/users/user-session.entity';

export const CurrentUserQuery = createGraphqlQuery<UserSession>(gql`
  query {
    whoAmI {
      id
      username
    }
  }
`);
