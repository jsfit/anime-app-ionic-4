import { Schema, Record} from 'js-data';

export const UserSchema = new Schema ({
  title: 'User', 
  description: 'Schema for User records', 
  type: 'object',
  properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          username: { type: 'string' },
          email: { type: 'string' },
          addess: { type: 'object' },
          phone: { type: 'string' },
          website: { type: 'string' },
          company: { type: 'object' },
        }
});

export interface IUser extends Record {
      id: { type: 'number' },
      name: { type: 'string' },
      username: { type: 'string' },
      email: { type: 'string' },
      addess: { type: 'object' },
      phone: { type: 'string' },
      website: { type: 'string' },
      company: { type: 'object' },
  }

export const UserRelations =  {
  
}

