import { RoleModel } from './role.model';
export interface UserModel {
  bannerId: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  roleid: number;
}
