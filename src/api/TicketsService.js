import axios from 'axios';

export default class TicketsService {
  static async getSearchId() {
    try {
      const response = await axios.get('https://front-test.beta.aviasales.ru/search')
      if (response.status === 200) {
        return response.data.searchId //{searchId: 'ecb4wb', error: false}
      }
      throw new Error(response.statusText)
    } catch (e) {
      throw e
    }
  }
  static async getTickets(searchId){
    const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    if (response.status === 200) {
      return {...response.data, tickets: response.data.tickets.slice(0, 5)} //{tickets: Array(420), stop: false, error: false}
    }
    throw new Error(response.statusText)
  } catch (e) {
    throw e
  }
}