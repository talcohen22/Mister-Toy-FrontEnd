import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
})

import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"
import { httpService } from './http.service'

const TOY_KEY = 'toyDB'
const BASE_URL = 'toy/'

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
    'Outdoor', 'Battery Powered']


export const toyService = {
    query,
    remove,
    // add,
    get,
    getEmptyToy,
    save,
    getAvgByLabelFor
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
    // return storageService.query(TOY_KEY, delay).then(toys => toys)
}

function get(toyId) {
    return httpService.get(BASE_URL + toyId)
    // return storageService.get(TOY_KEY, toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
    // return storageService.remove(TOY_KEY, toyId)
}

function getEmptyToy(name = '', price = 0, inStock = false) {
    return { name, price, inStock }
}

function save(toy) {
    if (toy._id) return httpService.put(BASE_URL, toy)
    else {
        toy.createdAt = Date.now()
        toy.labels = []
        return httpService.post(BASE_URL, toy)
    }
    // return storageService.post(TOY_KEY, toy)
}

function getAvgByLabelFor(key) {
    return query().then(toys => {
        const labelsMap = {}
        toys.forEach(toy => {
            toy.labels.forEach(label => {
                if (!labelsMap[label]) {
                    labelsMap[label] = { count: 1, [key]: toy[key] }
                }
                else {
                    labelsMap[label].count++
                    labelsMap[label][key] += +toy[key]
                }
            })
        })
        const labels = []
        const data = []
        for (const k in labelsMap) {
            labels.push(k)
            data.push(labelsMap[k][key] / labelsMap[k].count)
        }
        return { labels, data }
    })
}


// function add(todo) {
//     return storageService.post(TODO_KEY, todo)
// }
