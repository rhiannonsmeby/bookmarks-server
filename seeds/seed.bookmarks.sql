BEGIN;
INSERT INTO bookmarks (title, bookmark_url, bookmark_description, rating)
VALUES
('Google', 'google.com', 'search engine', '5'),
('Thinkful', 'thinkful.com', 'learning program', '5'),
('Reddit', 'reddit.com', 'social media', '5')
;
COMMIT;