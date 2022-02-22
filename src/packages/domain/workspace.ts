import { Board } from './board';

export interface Workspace {
  id: string;
  name: string;
  boards: Board[];
}
