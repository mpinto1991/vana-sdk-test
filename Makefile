.PHONY: install build test lint coverage

install:
	npm install

build:
	npm run build

test:
	npm run test

lint:
	npm run lint

coverage:
	npm run coverage

format-check:
	npm run format:check

format-write:
	npm run format:write

all: install build lint coverage test
