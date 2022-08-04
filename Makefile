install: # install dependencies
	npm ci
publish: #publish packages
	npm publish --dry-run
brain-games: # start application
	node bin/brain-games.js

