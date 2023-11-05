import { useEffect, useState } from "react"
import { Query, getQueries } from "../services/queries"
import { getIndexesList } from "../services/indexes_list"
import { reindexIndex } from "../services/reindex_index"


const Indexes = () => {

  const [data, setData] = useState<string[]>([])

  const update = async () => {
    const data = await getIndexesList()
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
      }}>Индексы</h1>
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
              <p>Индексы: {dt}</p>
              <button onClick={() => {
                reindexIndex(dt)
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

export default Indexes