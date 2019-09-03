import { get , post } from "./http";
export const apiA = p => get('Api/getWap',p);
export const zhanData = p => get('Api/exhibitor_list',p);
export const xqArr = p => get('Api/exhibitor_detail',p);