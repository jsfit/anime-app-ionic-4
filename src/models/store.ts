import { DataStore } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import * as dataModel from './index'

export const STORE = new DataStore({});
export const adapter = new HttpAdapter({
    basePath: 'https://jsonplaceholder.typicode.com/'
});

STORE.registerAdapter('http', adapter, { default: true });

STORE.defineMapper('anime', {
    endpoint: 'animes',
    schema: dataModel.AnimeSchema,
    relations: dataModel.AnimeRelations,
  });

STORE.defineMapper('user', {
    endpoint: 'users',
    schema: dataModel.UserSchema,
    relations: dataModel.UserRelations,
  });