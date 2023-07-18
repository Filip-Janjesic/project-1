import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public index = async ({ response, view }:HttpContextContract) => {
        const html = await  view.render('posts/index')
        console.log(html)
        return html
    }
}