import { TagsModel } from "./tags-model"

export  interface ComponentTagsModel {
        id: string,
        Tags: TagsModel
        component_id: string,
        tags_id: string
}