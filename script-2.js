/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //фильм
    actor: {}, //актер
    genres: [], //жанры
    privat: false //
};

// 1) Автоматизировать вопросы про фильмы
let FilmsName = [];
let FilmsRating = [];

//FOR
for(let i = 0; i < 2; i++){
    FilmsName[i] = prompt("Один из последних просмотренных фильмов?");
    FilmsRating[i] = +prompt("На сколько оцените его?");

    if(FilmsName[i] != null && FilmsRating[i] != null /* Если не нажата кнопка "отмена"*/
    && FilmsName[i] != '' && FilmsRating[i] != '' /* и если поля не пусты,*/
    && FilmsName[i].length < 50){ /* и если длина названия фильма меньше 50 символов*/
        personalMovieDB.movies[FilmsName[i]] = FilmsRating[i];
        console.log('done');
    } else{
        console.log('error');
        i--;
    }

}
//let i = 0;
// WHILE
// while(i<2){
//     FilmsName[i] = prompt("Один из последних просмотренных фильмов?");
//     FilmsRating[i] = +prompt("На сколько оцените его?");

//     if(FilmsName[i] != null && FilmsRating[i] != null /* Если не нажата кнопка "отмена"*/
//     && FilmsName[i] != '' && FilmsRating[i] != '' /* и если поля не пусты,*/
//     && FilmsName[i].length < 50){ /* и если длина названия фильма меньше 50 символов*/
//         personalMovieDB.movies[FilmsName[i]] = FilmsRating[i];
//         console.log('done');
//     } else{
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// DO-WHILE
// do{
//     FilmsName[i] = prompt("Один из последних просмотренных фильмов?");
//     FilmsRating[i] = +prompt("На сколько оцените его?");

//     if(FilmsName[i] != null && FilmsRating[i] != null /* Если не нажата кнопка "отмена"*/
//     && FilmsName[i] != '' && FilmsRating[i] != '' /* и если поля не пусты,*/
//     && FilmsName[i].length < 50){ /* и если длина названия фильма меньше 50 символов*/
//         personalMovieDB.movies[FilmsName[i]] = FilmsRating[i];
//         console.log('done');
//     } else{
//         console.log('error');
//         i--;
//     }
//     i++; 
// }while(i<2);

//3
if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");  
}else if(personalMovieDB.count >= 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}

    console.log(personalMovieDB);
