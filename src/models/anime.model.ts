import { Schema, Record} from 'js-data';

export const AnimeSchema = new Schema ({
  title: 'Anime', 
  description: 'Schema for Anime records', 
  type: 'object',
  properties: {
          title: { type: 'string' },
          date: { type: 'string' },
        }
});

export interface IAnime extends Record {
      title: { type: 'string' },
      date: { type: 'string' },
  }

export const AnimeRelations =  {
  
}

