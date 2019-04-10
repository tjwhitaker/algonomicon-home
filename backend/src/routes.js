import Router from 'koa-tree-router'
import article from './contexts/article'
import dataset from './contexts/dataset'
import paper from './contexts/paper'
import project from './contexts/project'
import video from './contexts/video'
import feed from './contexts/feed'

const open = new Router()
const closed = new Router()

open.get('/articles', article.index)
open.get('/articles/:id', article.detail)
closed.post('/articles', article.create)
closed.put('/articles/:id', article.update)
closed.delete('/articles/:id', article.destroy)

open.get('/datasets', dataset.index)
open.get('/datasets/:id', dataset.detail)
closed.post('/datasets', dataset.create)
closed.put('/datasets/:id', dataset.update)
closed.delete('/datasets/:id', dataset.destroy)

open.get('/papers', paper.index)
open.get('/papers/:id', paper.detail)
closed.post('/papers', paper.create)
closed.put('/papers/:id', paper.update)
closed.delete('/papers/:id', paper.destroy)

open.get('/projects', project.index)
open.get('/projects/:id', project.detail)
closed.post('/projects', project.create)
closed.put('/projects/:id', project.update)
closed.delete('/projects/:id', project.destroy)

open.get('/videos', video.index)
open.get('/videos/:id', video.detail)
closed.post('/videos', video.create)
closed.put('/videos/:id', video.update)
closed.delete('/videos/:id', video.destroy)

open.get('/feed', feed.index)

export { open, closed } 