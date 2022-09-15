// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
export default (obj: any, path: string | string[], value: any): any => {
    // Regex explained: https://regexr.com/58j0k
    const pathArray = (
        Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
    )?.map(
        part => parseInt(part).toString() === part ? parseInt(part) : part
    );

    obj = obj ?? (typeof pathArray?.[ 0 ] === 'number' ? [] : {});

    pathArray?.reduce((acc, key, i) => {
        if (acc[ key ] === undefined || acc[ key ] === null) {
            const nextKey = pathArray[ i + 1 ];

            acc[ key ] = typeof nextKey === 'number' ? [] : {};
        }

        if (i === pathArray.length - 1) {
            if (typeof key !== 'number' && Array.isArray(acc)) {
                // eslint-disable-next-line no-console
                console.error(`Invalid array key "${ key }"`);
            }

            acc[ key ] = value;
        }

        return acc[ key ];
    }, obj);

    return obj;
};
