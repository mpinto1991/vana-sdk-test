.PHONY: install build test lint coverage

install:
	npm ci

build:
	npm run build

test:
	npm run test

lint:
	npm run lint

coverage:
	npm run coverage

all: install build lint coverage test
