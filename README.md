# Решение тестового задание на позицию frontend разработчика в "RBKmoney"

## 1. Текст задания 

Разработать UI клиент для открытого REST API: https://jsonplaceholder.typicode.com

1. Можно использовать любой современный ui фраемворк с любыми плагинами, которые вы считаете применимыми. 
   - [x] React, 
   - [ ] Angular, 
   - [ ] Vue, 
   - [ ] Vanilla JS 
2. Внешний вид и сценарий использования:
    - [x] На главной странице отображается список пользователей в виде таблицы, со столбцами: name, username, email, website. 
    - [x] По клику на строку в таблице необходимо сделать переход на страницу пользователя.
    - [x] На странице пользователя отображается его подробная информация:
        - [x] name, username, email, address (geo информацию можно не использовать), phone, website, company;
        - [x] Список альбомов с указанием title. По клику на конкретный альбом, необходимо сделать переход в альбом;
    - [x] Страница альбома представляет собой, отображение фотографий альбома в виде плитки. В каждом элементе плитки отображается title фотографии и сама фотография (поле url);
- [x] Использовать адаптивную верстку;
- [x] Проект должен быть расположен на github;
- [x] Проект должен запускаться командой `npm start` c корня проекта и быть доступным на `localhost:8000`;
6. Оцениваются следующие аспекты: 
    - [x] git flow,
    - [x] code style, 
    - [x] верстка,
    - [x] качество кода,
    - [ ] конфигурация сборки проекта (готовые бандлеры по типу `create-react-app` и т.п не приветствуются);

## 2. Стек технологий 

1. React
2. Redux
3. Redux-Saga
3. Semantic (basic css style)

## 3. Run

1. `npm install`
2. `npm start`

## 4. Результат проверки тестового задания 

⭐️Alexandra *****, [Jan 19, 2018, 12:37:44 PM]:
> ...Тестовое задание направлено в основном на выявление способности писать грамотно. 
> Тут же очень много было сделано не тобой, поэтому оценивать сложно.

> Верстки нету, конфигурации бандрела нету

> Так что скорее всего нет, увы

### 4.1 План исправления 
  
- [ ] Написать свой конфиг webpack для сборки проектов на React (+ babel ES6)
- [x] Убрать Semantic UI и сверстать компоненты самостоятельно (branch `develop/version-2`)

## 5. Авторы

* User Profile PSD - [Kálmán Magyari](https://www.uplabs.com/neurofunkx)
* PhoneLink - [github: @Nathanhoad](https://github.com/nathanhoad/react-phone-number)
