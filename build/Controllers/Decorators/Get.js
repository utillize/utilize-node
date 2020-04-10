"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = (path) => {
    // target is the class and propertyKey is the decorated method name
    return (target, propertyKey) => {
        // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
        // To prevent any further validation simply set it to an empty array here.
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'get',
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
//# sourceMappingURL=Get.js.map