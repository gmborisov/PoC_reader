package ru.cureadme

class Post {
    Date createdAt
    Date modifiedAt
    Date publishedAt
    
    Status status = Status.PUBLISHED
    
    String text
    
    static hasMany = {tags: Tag}

    static constraints = {
    }
}
