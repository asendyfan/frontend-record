import qs from 'querystring'

//获取相对路径
export const getPathname = () => {
    return window.location.hash.replace(/^#/, '').replace(/\?.*/, '').toLowerCase().replace(/\/$/, '')
}

//获得params对象
export const getSearch = () => {
    const hash = window.location.hash.includes('?')
        ? window.location.hash :
        ''
    return qs.parse(hash.replace(/.*\?/g, ''))
}

//更新url部分params， 指定history对象，默认为原生history使用pushstate更新
export const updateUrlParams = (queryObj: any, history?: any) => {
    const pathname = getPathname()
    const search = getSearch()
    Object.assign(search, queryObj)
    const url = pathname + '?' + qs.stringify(search)
    if (history) return history.replace(url)
    else window.history.pushState('', '', '#' + url)
}

export const deleteUrlParams = (keys: Array<string>, history: any) => {
    const pathname = getPathname()
    const search = getSearch()
    for (let i = 0; i < keys.length; i++) {
        delete search[keys[i]]
    }
    const url = pathname + '?' + qs.stringify(search)
    if (history) return history.replace(url)
    else window.history.pushState('', '', '#' + url)
}

//更改整个params
export const changeAllUrlParams = (obj: any, history: any) => {
    const pathname = getPathname()
    const url = pathname + '?' + qs.stringify(obj)
    if (history) return history.replace(url)
    else window.history.pushState('', '', '#' + url)
}
