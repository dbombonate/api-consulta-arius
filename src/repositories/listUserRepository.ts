export interface UsersListData {
  store: number;
  operator: number;
}

export interface UsersListRepository {
  list: (data: UsersListData) => Promise<Object>;
}
