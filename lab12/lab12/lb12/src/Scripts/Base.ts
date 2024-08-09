class Film{
    constructor(public name:string, public imgSrc:string, public year:string, public type:string) {
    }
}

class Base{
    public movies:Film[] = [];
    public cartoons:Film[] = [];
    public series:Film[] = [];
    addMovies(name:string, imgSrc:string, year:string):void{
        this.movies.push(new Film( name, imgSrc, year, "movies"));
    }
    addCartoons(name:string, imgSrc:string, year:string):void{
        this.cartoons.push(new Film( name, imgSrc, year, "cartoon"));
    }
    addSeries(name:string, imgSrc:string, year:string):void{
        this.series.push(new Film( name, imgSrc, year, "series"));
    }
    
    init(){
        this.addMovies("Титаник","https://npr.by/wp-content/uploads/2022/09/Titanik-2.jpg", "1997")
        this.addMovies("Остров проклятых", "https://s14.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2021/04/ostrov-proklyatyh-1024x683.jpg", "2009")
        this.addMovies("Интерстеллар", "https://hi-news.ru/wp-content/uploads/2014/11/inter_main.jpg", "2011")
        this.addMovies("Drive", "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2011/9/14/1315997543282/ryan-gosling-in-drive-007.jpg?width=465&dpr=1&s=none", "2011")
        this.addMovies("Бойцовский клуб", "https://rus.team/images/article/41798/2019-08-19-406_72856-5_413583.webp", "1999")
        this.addMovies("Форрест Гамп", "https://www.recenzent.org.ua/wp-content/uploads/2018/02/forrest-gump-main.jpg", "1994")
        this.addMovies("Зеленая миля", "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/1668876/a345b127722243984f01ef6504c9a477/380x240", "1999");
        this.addMovies("1+1", "https://start.ru/images/unsafe/filters:quality(70)/e95492ac16f6428c8481352bd2744621/horizontal_poster_15x", "2011");

        this.addCartoons("Зверополис", "https://avatars.dzeninfra.ru/get-zen_doc/53963/pub_5ae20859db0cd9699b56c457_5ae20869610493953ec1fd24/scale_1200", "2016")
        this.addCartoons("Шрек", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjd_nJ3gv9u8_InZP3wIRXPv2eV5vjvlh-Aw0jmqh4JQ&s", "2001")
        this.addCartoons("Рататуй", "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/390521c15d6e9158175ff7ce5e8b6d39/380x240", "2007")
        this.addCartoons("Тайна Коко", "https://tlum.ru/uploads/783e178412f13ad421aaf88ad61f45e9e948c668669c6b861ad0bceb2bae8670.jpeg", "2017")
        this.addCartoons("ВАЛЛ-И", "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/9b5bda16-ae04-478e-bdc0-20ddfe89b057/x178", "2008")
        this.addCartoons("Жил-был пес", "https://cdn.ren.tv/cache/960x540/media/img/15/d3/15d38a8fb722d5f514f9647d39422bbf57ccbb19.jpg", "1982")
        this.addCartoons("Ходячий замок", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvCx0zzD8HSweelS9C1mMFjYWXXlGmyqNnCV_Yj9fjg&s", "2004")
        this.addCartoons("Дитя погоды", "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/be1c262b2a63ace67c001ae86034a31d/960x540", "2019")

        this.addSeries("Во все тяжкие", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_Wi8TyQdmSSg_QnbhDPcrS8vnLuBK7rIEZUpm6dV4A&s", "2008-2013")
        this.addSeries("Игра престолов", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5sUMisBbMj6Zm-6Lth-YCR2g9M2RUod9U4QOEAkdKb-4zWHCE-IakV6zolH4eivHDec&usqp=CAU", "2011-2019")
        this.addSeries("Люцифер", "https://thumbs.dfs.ivi.ru/storage33/contents/9/1/e7343aeadf07ea3a56c71289f3c8e9.jpg/1280x720/?q=85", "2016-2021")
        this.addSeries("Сверхъестественное", "https://whatisgood.ru/wp-content/uploads/2017/08/serial-sverhestestvennoe-0.jpg", "2005-2023")
        this.addSeries("Доктор Кто?", "https://media.kg-portal.ru/tv/d/doctorwho/posters/doctorwho_15t.jpg", "2005-...")
        this.addSeries("Шерлок", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoXm1yRcuw1zCT_ci7g748epL6Z7sBj2IXXctcCXHdA&s", "2010-2017")
        this.addSeries("Чернобыль", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBN8Svd8-2dKCt7CH5DpcmTLqqKqYXkztLe8aE1_HOQ&s", "2019")
        this.addSeries("Бесстыжие", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MTZxoFBD77rcMglvAjqOoaObwUPQdAHwL01MdQF9Mg&s", "2011-2021")

    }

}

export {Base, Film};