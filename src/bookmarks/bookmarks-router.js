const express = require('express')
const {v4: uuid} = require('uuid')
const logger = require('../logger')
const {bookmarks} = require('../store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
    .route('/bookmarks')
    .get((req, res) => {
        res
            .json(bookmarks)
    })
    .post(bodyParser, (req, res) => {
        const {title, description, url} = req.body;
        //validate that title, description, url exist
        if (!title) {
            logger.error(`Title is required`);
            return res
                .status(400)
                .send(`Invalid data`);
        }
        if (!description) {
            logger.error(`Description is required`);
            return res
                .status(400)
                .send(`Invalid data`);
        }
        if (!url) {
            logger.error(`URL is required`);
            return res
                .status(400)
                .send('Invalid data');
        }
        //passes validation ->
        //get an id
        const id = uuid();
        const bookmark = {
            id,
            title,
            description,
            url
        };

        bookmarks.push(bookmark);

        logger.info(`Bookmark with id ${id} created`);

        res
            .status(201)
            .location(`http://localhost:8000/bookmarks/${id}`)
            .json(bookmark);
    })

bookmarksRouter
    .route('/bookmarks/:id')
    .get((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = bookmarksRouter