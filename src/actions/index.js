import axios from 'axios'

import { config } from '../config'

export const FETCH_SHOWS = 'FETCH_SHOWS'
export const FETCH_DISCOGRAPHY = 'FETCH_DISCOGRAPHY'

const API_BASE_URL = config.API_BASE_URL
const API_SPACE_ID = config.API_SPACE_ID
const API_TOKEN = config.API_TOKEN

export function fetchShows () {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=shows`)
  return {
    type: FETCH_SHOWS,
    payload: request
  }
}

export function fetchDiscography () {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=discography`)
  return {
    type: FETCH_DISCOGRAPHY,
    payload: request
  }
}
