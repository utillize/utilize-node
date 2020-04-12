import { Request, Response, Router, NextFunction } from 'express';
import middleware from '../middleware';
type MiddlewareWrapper = ((router: Router) => void);

export const applyMiddleware = (
	middleware: MiddlewareWrapper[],
	router: Router
) => {
	for (const each of middleware) {
		each(router)
	}
}

type Handler = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<void> | void;

type Route = {
	path: string,
	method: string,
	handler: Handler | Handler[]
}

export const applyRoutes = (routes: Route[], router: Router) => {
	for (const route of routes) {
		const { method, path, handler } = route;
		(router as any)[method](path, handler);
	}
}