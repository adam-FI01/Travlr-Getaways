import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Authentication } from '../services/authentication';

export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
  const authenticationService = inject(Authentication);

  // console.log('Interceptor::URL' + request.url);
  const isAuthAPI = request.url.includes('/login') || request.url.includes('/register');

  if (authenticationService.isLoggedIn() && !isAuthAPI) {
    const token = authenticationService.getToken();
    // console.log(token);
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(request);
};
