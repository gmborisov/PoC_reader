package ru.cureadme

class Tag {
    String name
    
    static constraints = {
        name unique: true;
    }
}
