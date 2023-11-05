import { useEffect, useState } from "react"
import { getIndexesList } from "../services/indexes_list"
import { reindexIndex } from "../services/reindex_index"
import { getTables } from "../services/tables"
import { reindexTable } from "../services/reindex_table"


const Tables = () => {

  const [data, setData] = useState<string[]>([])

  const update = async () => {
    const data = await getTables()
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
        color: 'var(--primary)',
        marginBottom: '20px'
      }}>Таблицы</h1>
      <div style={{
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {
          data.map((dt, index) => <>
            <div key={dt + index} style={{
              color: 'black',
              borderRadius: '8px',
              backgroundColor: '#AC272722',
              padding: '12px'
            }}>
              <p>Таблица: {dt}</p>
              <button onClick={() => {
                reindexTable(dt)
              }} style={{
                padding: '16px 24px',
                fontSize: '15px',
                borderRadius: '6px',
                marginTop: '6px',
                cursor: 'pointer',
                backgroundColor: 'var(--primary)',
                color: 'white'
              }}>Реиндексировать</button>
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default Tables