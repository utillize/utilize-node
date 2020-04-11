import { Router } from 'express';
import middleware from '../middleware';
type MiddlewareWrapper = ((router: Router) => void);

export const applyMiddleware = (
    middleware: MiddlewareWrapper[],
    router: Router
) => {
    for(const each of middleware) {
        each(router)
    }
}