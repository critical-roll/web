import { isBrowser } from '@common/utils';
import type { UserSession } from '@bff/features/users/user-session.entity';
import { CurrentUserQuery } from '../graphql/current-user.graphql';

class AuthServiceClass {
  private user?: UserSession | null;

  constructor() {
    if (isBrowser) {
      this.fetchUser();
    }
  }

  get isAuthenticated() {
    return Boolean(this.user);
  }

  loginWithRedirect() {
    window.location.href = `${process.env.NEXT_PUBLIC_BFF_URL}/auth/google`;
  }

  logout() {
    window.location.href = `${process.env.NEXT_PUBLIC_BFF_URL}/auth/logout`;
  }

  private async fetchUser(): Promise<void> {
    if (this.user === undefined) {
      try {
        const response = await CurrentUserQuery.query();
        this.user = response;
      } catch (error: any) {
        if (error.graphQLErrors && error.graphQLErrors.some((error: any) => error.message.includes('Unauthorized'))) {
          this.user = null;
        } else {
          throw error;
        }
      }
    }
  }
}

export const AuthService = new AuthServiceClass();
