.POSIX:
.PHONY: deploy fmt

default: deploy

deploy:
	rsync -rltv \
		--exclude="Makefile" \
		--exclude="*~" \
		--exclude=".git" \
	. basus@basus.me:/www/v4

fmt:
	cd _site; dprint fmt
