import { Request, Response, NextFunction, Router } from 'express';
import { HTTPClientError } from "../utils/http-errors/httpClientErrors";
import { HTTP404Error } from "../utils/http-errors/HTTP404Error"
const handle404Errors = (router: Router) => {
	router.use((req: Request, res: Response) => {
		throw new HTTP404Error("method not found");
	});
};

const handleClientErrors = (router: Router) => {
	router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		if (err instanceof HTTPClientError) {
			console.error(err);
			// error status harcoded , have to check type script error status value
			res.status(404).send(err.message);
		} else {
			next(err);
		}
	});
};

const handleServerErrors = (router: Router) => {
	router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(err);
		if (process.env.NODE_ENV === 'production') {
			res.status(500).send("Internal Server Error");
		} else {
			res.status(500).send(err.stack);
		}
	})
}

export default [handle404Errors, handleClientErrors, handleServerErrors];