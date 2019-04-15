import mongoose from 'mongoose'
import article from './article'
import dataset from './dataset'
import paper from './paper'
import project from './project'
import video from './video'

const feed = {
  index: async (ctx) => {
    const articles = await article.model.find().lean()
    const datasets = await dataset.model.find().lean()
    const papers = await paper.model.find().lean()
    const projects = await project.model.find().lean()
    const videos = await video.model.find().lean()

    articles.map(article => article.type = 'article')
    datasets.map(dataset => dataset.type = 'dataset')
    papers.map(paper => paper.type = 'paper')
    projects.map(project => project.type = 'project')
    videos.map(video => video.type = 'video')

    const items = [...articles, ...datasets,, ...papers, ...projects, ...videos]
    const sorted = items.sort((a, b) => {return new Date(b.createdAt) - new Date(a.createdAt)})

    ctx.response.body = sorted 
  }
}

export default feed