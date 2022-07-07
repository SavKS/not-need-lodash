export default (obj: any, path: string | string[]) => {
    if (!path) {
        return false;
    }

    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

    if (pathArray === null) {
        return false;
    }

    let prevObj = obj;

    for (const key of pathArray) {
        if (typeof prevObj !== 'object' || !Object.hasOwnProperty.call(prevObj, key)) {
            return false;
        }
        prevObj = prevObj[ key ];
    }

    return true;
};
