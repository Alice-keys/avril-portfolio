import { Technology } from './technology.entity.js'

export class Project {
    constructor({
                    id = '',
                    title = '',
                    description = '',
                    imageUrl = '',
                    technologies = [],
                    githubUrl = '',
                    deployUrl = ''
                }) {
        this.id = id
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
        this.technologies = technologies.map(t => new Technology(t))
        this.githubUrl = githubUrl
        this.deployUrl = deployUrl
    }
}