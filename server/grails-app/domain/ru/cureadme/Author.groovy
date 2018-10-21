package ru.cureadme

class Author {
    String nickName
    String email
    
    static hasMany = [posts: Post]
}
