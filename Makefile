NODE = node

all:
	coffee -c lib/phreak.coffee
	@$(NODE) test/*.js
