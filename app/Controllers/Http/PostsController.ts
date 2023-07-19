import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public index = async ({ response, view }:HttpContextContract) => {
        const post = {
            id: 1,
            name: 'Cars',
            hidden: true,
        }
        
        const html = await  view.render('posts/index', { title: 'Post index page', post })
        console.log(html)
        return html
    }
}