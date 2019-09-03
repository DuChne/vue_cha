import { get , post } from "./http";
export const apiAddress = p => get('Api/getWap',p);
export const apiAp = a => post('Api/login', a);
export const loging = a =>post('Api/login',a)
export const apiAddre = p => get('Api/getWap',p);



// https://sz.goodtea.cc/index/Api/getWap