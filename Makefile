.POSIX:
.PHONY: deploy fmt

default: deploy

all: build fmt deploy

build:
	lume

deploy:
	rsync -rltcv \
		--exclude="/fonts" \
		--exclude="Makefile" \
		--exclude=".git" \
	_site/ basus@basus.me:/www/v4

fmt:
	cd _site; dprint fmt
