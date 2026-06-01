import {randomUUID} from 'crypto'
export type User = {
  id: string;
  name: string;
  email: string;
};

export const users:Array<User> = [
  {id:randomUUID(),name:'rashid',email:'nri@dkf.com'}
];
