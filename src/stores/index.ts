import { ref, computed } from "vue";
import { defineStore } from "pinia";

// type Books = {
//     id: number
//     descreption:String
// }
export const useBookStore = defineStore("books",{
    state: () => ({
        books: [],
        current:null
    }),
    getters: {
        bookCount(state) {
            return state.books.length
        },
        allBooks(state) {
            return state.books
        },
        getRangeByPage(state) {
            return (page:number) => {
                const SIZE = 3
                return state.books.slice((page-1)*SIZE,(page-1)*SIZE+SIZE)
            }
        },
        getBookById(state) {
            return (id: number) => {
                // @ts-ignore
                return state.books.find((book) => book.id === id)
            }
        },
        current(state) {
            return state.current
        }
    },
    actions: {
        // @ts-ignore
        addBooks(payload) {
            // @ts-ignore
            this.books.push(payload)
        },
        // @ts-ignore
        updateBooks(payload) {
            this.current=payload
        }
    },
})