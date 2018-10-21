package ru.cureadme

class BootStrap {

    def init = { servletContext ->
        Author pes = new Author(nickName: "varlamov_pes", email: "pes_varlamova@mail.ru")
        Author kot = new Author(nickName: "varlamov_kot", email: "kot_varlamova@mail.ru")
        (1..15).each {
            Post newPost = new Post(text: "$it post", createdAt: new Date())
            if (it & 1){
                pes.addToPosts(newPost)
            } else {
                kot.addToPosts(newPost)
            }
        }
        pes.save(flush:true)
        kot.save(flush:true)
    }
    def destroy = {
    }
}
