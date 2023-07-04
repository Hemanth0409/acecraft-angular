import { CanActivateFn } from '@angular/router';
import { UserService } from 'src/services/user.service';
export const authGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
