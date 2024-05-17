const BASE_URL = 'http://localhost:8080/api/';

export const FOODS_URL = BASE_URL + 'foods';
export const FOODS_TAGS_URL = BASE_URL + 'tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = BASE_URL + 'tags/';
export const FOODS_BY_ID_URL = FOODS_URL + '/';
export const USER_LOGIN_URL = BASE_URL + 'user/login';
export const USER_REGISTER_URL = BASE_URL + 'user/register';

export const ORDERS_URL = BASE_URL + 'orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
