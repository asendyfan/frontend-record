/**
 *清除对象上的空值
 *
 * @param {*} obj
 * @returns
 */
function withoutEmptyObj(obj: any) {
    if (!(obj instanceof Object)) return obj
    return Object.entries(obj).reduce((pre: any, [key, value]: any) => {
        if (value !== '' && value !== undefined && value !== null) {
            pre[key] = value
        }
        return pre
    }, {})
}

export default withoutEmptyObj