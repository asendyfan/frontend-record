import { useState, useReducer, useMemo, useCallback } from "react";

/**
 *
 *对get请求中params参数的操作
 * @export
 * @param {{
 *  refreshKey:string[],   
 *  initValue:any          
 * }} {
 *     refreshKey = ['offset'],  (调用refresh方法时，需要将哪些参数初始化)
 *     initValue = {offset:0, limit:10}}  (参数的初始值)
 * @returns
 */
export default function useParams({
    refreshKey = ['offset'],
    initValue = { offset: 0, limit: 10 } }: {
        refreshKey: string[], initValue: any
    }) {
    const reducer = useCallback((state: any, action: any) => {
        const { type, ...rest } = action
        if (action.type === 'refresh') {
            const refreshValue = refreshKey.reduce((pre: any, cur: any) => {
                if (initValue[pre] !== undefined) cur[pre] = initValue[pre]
                return cur
            }, {} as any)
            return { ...state, ...refreshValue, ...rest }
        } else if (action.type === 'update') {
            return { ...state, ...rest }
        } else return state
    }, [])
    const [params, dispatch] = useReducer(reducer, initValue as any)


    const update = (updateValues: any) => {
        dispatch({ type: 'update', ...updateValues })
    }
    const refresh = (refreshValues: any) => {
        dispatch({ type: 'refresh', ...refreshValues })
    }
    return { update, refresh, params }
}