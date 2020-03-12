import { useState, useCallback } from "react";
interface DataProps {
    list: Array<any>
    total: number
}

/**
 *请求列表hook，包括loading状态、列表总数、列表、以及嵌套下的更新函数
 *
 * @export
 * @param {Function} updateFunc
 * @param {*} [initV={list:[], total:0}]
 * @returns
 */
export default function useListRequest(updateFunc: Function, initV = { list: [], total: 0 }) {
    const [data, setData] = useState<DataProps>(initV)
    const [loading, setLoading] = useState(false)
    const updateList = useCallback((params?: any) => {
        setLoading(true)
        return updateFunc(params)
            .then((res: DataProps) => setData(res))
            .finally(() => {
                setLoading(false)
            })
    }, [updateFunc])
    const manualUpdate = (props: DataProps = { list: [], total: 0 }) => {
        setData(props)
    }
    return { list: data.list, total: data.total, loading, updateList, manualUpdate }
}