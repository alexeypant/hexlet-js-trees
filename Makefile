install: 
	npm install

start: 
		npm run babel-node -- src/bin/dfs.js

publish:
	npm publish

lint:
	npm run eslint  src/