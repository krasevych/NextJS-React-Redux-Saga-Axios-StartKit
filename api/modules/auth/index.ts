import { Request } from '../../types';

import { User } from './types';
export * from './types';

export const login = (request: Request) => () =>
  request<User>({
    method: 'POST',
    url: 'login'
  });
