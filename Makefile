.POSIX:
.PHONY: deploy fmt

default: deploy

all: build fmt deploy

build:
	TZ="America/New_York" lume

deploy:
	rsync -rltcv \
		--exclude="/fonts" \
		--exclude="Makefile" \
		--exclude=".git" \
	_site/ basus@basus.me:/www/v4

fmt:
	cd _site; dprint fmt

# targets to add new posts and entries

# If the first argument is `new` pass the rest of the line to the target
ifeq (new, $(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for `new`
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # Turn them into do-nothing targets, mainly to stop make from complaining
  $(eval $(RUN_ARGS):;@:)
endif

new:
	lume new $(RUN_ARGS) && cat .new-file-path | xargs emacsclient &

