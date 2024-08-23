import { type ITodo } from "./todo";

export interface IApiService {
  db: any;

  fetchTodosByData: ({}: fetchTodosByData) => Promise<void>;
  addItemToDb: ({}: ICreateItem) => Promise<void>;
  deleteItemFromDb: ({}: IDeleteItem) => Promise<void>;
  updateItemInDb: ({}: IUpdateItem) => Promise<void>;
}
export interface fetchTodosByData {
  COLLECTION_NAME: string;
  userId: string;
  targetStore: any;
  orderBy_: string;
  desc?: boolean;
}

export interface IDeleteItem {
  COLLECTION_NAME: string;
  id: string;
  itemStore: any;
}

export interface ICreateItem {
  COLLECTION_NAME: string;
  payload: ITodo;
  inputValue: any;
  targetStore: any;
  userId: string;
}

export interface IUpdateItem {
  COLLECTION_NAME: string;
  userId: string;
  editValue: any;
  itemStore: any;
}
