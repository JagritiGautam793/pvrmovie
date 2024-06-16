import {defineType} from "sanity";
// fiels required for movie schemas
export default defineType({
    name:'movie',
    title:'Movie',
    type:'document',
    fields:[
        {
            name:'title',
            type:'string'
        },
        {
            name:'poster_path',
            type:'string',
        },
        {
            name:'overview',
            type:'string',
        },
        {
            name:'original_language',
            type:'string',
        }
    ]
})
