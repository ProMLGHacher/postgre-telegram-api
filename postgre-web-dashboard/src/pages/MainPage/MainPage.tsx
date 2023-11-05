import DatabaseSize from "../../components/DatabaseSize"
import HardwareComp from "../../components/Hardware"
import Header from "../../components/Header"
import Indexes from "../../components/Indexes"
import Queries from "../../components/Queries"
import Sessions from "../../components/Sessions"
import Tables from "../../components/Tables"
import { checkpoint } from "../../services/checkpoint"
import { createBackUp } from "../../services/create_backup"
import { reindexDatabase } from "../../services/reindex_database"

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridGap: '20px',
                    gridTemplateColumns: '1fr 300px',
                    alignItems: 'start'
                }}>
                    <div>
                        <Sessions />
                        <Queries />
                        <HardwareComp />
                        <DatabaseSize />
                        <Indexes />
                        <Tables />
                    </div>
                    <div style={{
                        border: '1px solid var(--primary)',
                        borderRadius: '6px',
                        marginTop: '20px',
                        padding: '20px',
                        position: 'sticky',
                        top: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <button onClick={() => {
                            createBackUp()
                        }} style={{
                            padding: '16px 24px',
                            fontSize: '15px',
                            borderRadius: '6px',
                            width: '100%',
                            cursor: 'pointer',
                            backgroundColor: 'var(--primary)',
                            color: 'white'
                        }}>Создать backup</button>
                        <button onClick={() => {
                            reindexDatabase()
                        }} style={{
                            padding: '16px 24px',
                            fontSize: '15px',
                            borderRadius: '6px',
                            width: '100%',
                            cursor: 'pointer',
                            backgroundColor: 'var(--primary)',
                            color: 'white'
                        }}>Реиндексировать базу</button>
                        <button onClick={() => {
                            checkpoint()
                        }} style={{
                            padding: '16px 24px',
                            fontSize: '15px',
                            borderRadius: '6px',
                            width: '100%',
                            cursor: 'pointer',
                            backgroundColor: 'var(--primary)',
                            color: 'white'
                        }}>Checkpoint</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage