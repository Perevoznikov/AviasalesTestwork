import {useEffect, useState} from 'react';
import cl from './App.module.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Sort from './components/Sort/Sort';
import Button from './components/UI/Button/Button';
import TicketsService from './api/TicketsService';
import ListTickets from './components/ListTickets/ListTickets';
import useSort from './hooks/useSort';
import useFilter from './hooks/useFilter';
import useCalcFilter from './hooks/useCalcFilter';
import useFetch from './hooks/useFetch'
import {animateScroll as scroll} from "react-scroll";

function App() {
  const [searchId, setSearchId] = useState('')
  const [tickets, setTickets] = useState([])
  const [isEndTickets, setIsEndTickets] = useState(false)
  const [sort, setSort] = useState('price')
  const [filter, setFilter] = useState(['-1']) //{'-1':'Все', '0':'Без пересадок', '1':'1 пересадка', ...}
  const [isLoadingApp, setIsLoadingApp] = useState(true)

  const filterFields = useCalcFilter(tickets)
  const filteredTickets = useFilter(filter, tickets)
  const sortedTickets = useSort(sort, filteredTickets)

  const [getSearchId, isLoadingSearchId, errorSearchId] = useFetch(TicketsService.getSearchId)
  const [getTickets, isLoadingTickets, errorTickets] = useFetch(TicketsService.getTickets)


  useEffect(async () => {
    try {
      const _searchId = await getSearchId()
      setSearchId(_searchId)
      const {tickets, stop} = await getTickets(_searchId)
      setTickets(tickets)
      setIsEndTickets(stop)
    } catch (e) {
      alert(e)
    } finally {
      setIsLoadingApp(false)
    }
  }, [])

  const getMore = async () => {
    try {
      const {tickets: more_tickets, stop} = await getTickets(searchId)
      setTickets([...tickets, ...more_tickets])
      setIsEndTickets(stop)
      scroll.scrollToBottom({duration: 500});
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      {isLoadingApp
        ? <h1>Идет загрузка приложения</h1>
        : <div className={cl.container}>
          <div className={cl.header}>
            <Header/>
          </div>
          <div className={cl.body}>
            <div className={cl.sidebar}>
              <Filter value={filter} onChange={setFilter} fields={filterFields}/>
            </div>
            <div className={cl.tape}>
              <Sort value={sort} onChange={setSort}/>
              <ListTickets tickets={sortedTickets}/>
              <Button onClick={getMore} isLoading={isLoadingTickets} disabled={isEndTickets}/>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default App;
