import { User } from '../../../api/modules/auth';
import { ApiError } from '../../../api/types';

export interface AuthState {
  user: User | null;
  isError: boolean;
  isPending: boolean;
  isLoggedIn: boolean;
  error?: ApiError;
}
