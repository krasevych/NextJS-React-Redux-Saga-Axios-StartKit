import { ApplicationState } from '../../createReducer';

export const selectUser = ({ auth }: ApplicationState) => auth.user;
