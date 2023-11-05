import { useEffect, useState } from "react"
import { Query, getQueries } from "../services/queries"
import { DbSize, getDbSize } from "../services/db_size"


const DatabaseSize = () => {

    const [data, setData] = useState<DbSize | undefined>(undefined)

    const update = async () => {
        const data = await getDbSize()
        setData(data)
        setTimeout(() => {
            update()
        }, 10000);
    }

    useEffect(() => {
        update()
    }, [])

    return (
        <div style={{
            border: '1px solid var(--primary)',
            padding: '20px',
            marginTop: '20px',
            borderRadius: '6px'
        }}>
            <h1 style={{
                color: 'var(--primary)'
            }}>Диск</h1>
            <h3 style={{
                color: 'var(--primary)',
                marginTop: '20px'
            }}>Имя базы: {data?.databaseSizeInfo.unitName}</h3>
            <h3 style={{
                color: 'var(--primary)'
            }}>Размер базы: {(data?.databaseSizeInfo?.bufferSize! / 1024 / 1024).toFixed(2)}МБ</h3>
            <h3 style={{
                color: 'var(--primary)',
                marginTop: '20px',
                marginBottom: '4px'
            }}>Таблицы</h3>
            <div style={{
                display: 'grid',
                gridGap: '20px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
            }}>
                {
                    data && data.tablesInfo.map((dt, index) => <>
                        <div key={dt.unitName + index} style={{
                            color: 'black',
                            borderRadius: '8px',
                            backgroundColor: '#AC272722',
                            padding: '12px'
                        }}>
                            <p>Таблица: {dt.unitName}</p>
                            <p>Размер: {(dt.bufferSize / 1024 / 1024).toFixed(2)}МБ</p>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}

export default DatabaseSize