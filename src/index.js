class WebCache {
    constructor(){
        this.list = {}
    }
    set(key, value){
        this.list[key] = value;
    }
    get(key){
        return this.list[key]
    }
}

window.WebCache = WebCache